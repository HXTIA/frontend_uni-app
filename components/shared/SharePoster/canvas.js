/** 生成海报 **/
export function createPoster(canvasInfo, options, callback) {
	uni.showLoading({
		title: '海报生成中…',
		mask: true
	})
	//创建canvas绘图上下文
	const myCanvas = uni.createCanvasContext(canvasInfo.id, this);
	let index = 0;
	drawCanvas(myCanvas, canvasInfo, options, index, () => {
		myCanvas.draw(true, () => {
			// 延迟,等canvas画完
			const timer = setTimeout(() => {
				savePoster.call(this, canvasInfo.id, callback);
				clearTimeout(timer);
			}, 500);
		})
	})
}

// 绘制中
const drawCanvas = async (myCanvas, canvasInfo, options, index, drawComplete) => {
	let item = options[index];
	// 最大行数：maxLine  字体大小：fontSize  行高：lineHeight
	// 类型 颜色 左 有 上 下  宽 高 圆角 图片 文本内容
	let {
		type,
		color,
		left,
		right,
		top,
		bottom,
		width,
		height,
		radius,
		url,
		content,
		fontSize
	} = item
	radius = radius || 0;
	const {
		width: canvasWidth,
		height: canvasHeight
	} = canvasInfo
	switch (type) {
		/** 文本 **/
		case 'text':
			if (!content) break
			// 根据字体大小计算出宽度
			myCanvas.setFontSize(fontSize)
			// 内容宽度：传了宽度就去宽度，否则取字体本身宽度
			item.width = width || myCanvas.measureText(content).width
			// left位置
			if (right !== undefined) {
				item.left = canvasWidth - right - item.width
			} else if (left === 'center') {
				item.left = canvasWidth / 2 - item.width / 2
			}

			// top位置
			if (bottom !== undefined) {
				item.top = canvasHeight - bottom - fontSize
			}

			drawText(myCanvas, item);
			break
			/** 图片 **/
		case 'image':
			if (!url) break
			let imageTempPath = await getImageTempPath(url)
			// left位置
			if (right !== undefined) {
				left = canvasWidth - right - width
			} else if (left === 'center') {
				left = canvasWidth / 2 - width / 2
			}

			// top位置
			if (bottom !== undefined) {
				top = canvasHeight - bottom - height
			}

			// 带圆角
			if (radius) {
				myCanvas.save()
				myCanvas.beginPath()
				// 圆形图片
				if (radius === '50%') {
					myCanvas.arc(left + width / 2, top + height / 2, width / 2, 0, Math.PI * 2, false)
				} else {
					if (width < 2 * radius) radius = width / 2
					if (height < 2 * radius) radius = height / 2
					myCanvas.beginPath()
					myCanvas.moveTo(left + radius, top)
					myCanvas.arcTo(left + width, top, left + width, top + height, radius)
					myCanvas.arcTo(left + width, top + height, left, top + height, radius)
					myCanvas.arcTo(left, top + height, left, top, radius)
					myCanvas.arcTo(left, top, left + width, top, radius)
					myCanvas.closePath()
				}
				myCanvas.clip()
			}
			myCanvas.drawImage(imageTempPath, left, top, width, height)
			myCanvas.restore()

			break
			/** 盒子 **/
		case 'block':
			// left位置
			if (right !== undefined) {
				left = canvasWidth - right - width
			} else if (left === 'center') {
				left = canvasWidth / 2 - width / 2
			}

			// top位置
			if (bottom !== undefined) {
				top = canvasHeight - bottom - height
			}
			if (width < 2 * radius) {
				radius = width / 2
			}
			if (height < 2 * radius) {
				radius = height / 2
			}
			myCanvas.beginPath()
			myCanvas.fillStyle = color
			myCanvas.strokeStyle = color
			myCanvas.moveTo(left + radius, top)
			myCanvas.arcTo(left + width, top, left + width, top + height, radius)
			myCanvas.arcTo(left + width, top + height, left, top + height, radius)
			myCanvas.arcTo(left, top + height, left, top, radius)
			myCanvas.arcTo(left, top, left + width, top, radius)
			myCanvas.stroke()
			myCanvas.fill()
			myCanvas.closePath()
			break
			/** 边框 **/
		case 'border':
			// left位置
			if (right !== undefined) {
				left = canvasWidth - right - width
			}

			// top位置
			if (bottom !== undefined) {
				top = canvasHeight - bottom - height
			}
			myCanvas.beginPath()
			myCanvas.moveTo(left, top)
			myCanvas.lineTo(left + width, top + height)
			myCanvas.strokeStyle = color
			myCanvas.lineWidth = width
			myCanvas.stroke()
			break
	}

	// 递归边解析图片边画
	if (index === options.length - 1) {
		drawComplete()
	} else {
		index++
		drawCanvas(myCanvas, canvasInfo, options, index, drawComplete)
	}
}

// 下载并预览保存
function savePoster(canvasId, callback) {
	uni.hideLoading();
	uni.canvasToTempFilePath({
			canvasId,
			async success(res) {
				callback && callback(res.tempFilePath)
				const strpreview = res.tempFilePath;
				const arrpreview = [res.tempFilePath];
				await uni.previewImage({
					urls: arrpreview
				});
				uni.showModal({
					title: '提示',
					content: '是否保存到手机相册？',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '保存中…',
								mask: true
							})
							uni.saveImageToPhotosAlbum({
								filePath: strpreview,
								success() {
									uni.showToast({
										icon: 'success',
										title: '保存成功！'
									});
								},
								fail() {
									uni.showToast({
										icon: 'none',
										title: '保存失败，请稍后再试~'
									})
								},
								complete() {
									uni.hideLoading()
								}
							})
						} else if (res.cancel) {
							return uni.showToast({
								icon: 'none',
								title: '已取消'
							});
						}
					}
				});

			},
			fail(res) {
				console.log('图片保存失败：', res.errMsg)
				uni.showToast({
					icon: 'none',
					title: '保存失败，请稍后再试~'
				})
			}
		},
		this
	)
}


/**
 * @description 绘制文本自动换行,兼容中英文数字
 * @param obj = {
 *   text:''//绘制文本
 *   x,y, // 文本开始位置
 *   fontSize,color,
 *   bold:Boolen, //是否粗体
 *   indent:Number, //首行缩进字数
 *   maxWidth:Number,// 文本绘制范围
 *   maxHeight:Number, // 文本绘制范围
 *   lineHeight:Number, // 行高
 *   vertical:'center'//全部文本在垂直方向居中方式，默认:'top'
 * }
 */
function drawText(ctx, item) {
	let {
		content,
		left,
		top,
		maxLine,
		fontSize,
		color,
		bold,
		indent,
		maxWidth,
		maxHeight,
		lineHeight,
		vertical
	} = item
	// 默认值
	let x = left || 10
	let y = top || 10
	maxWidth = maxWidth || 340
	maxHeight = maxHeight || 440
	bold = bold || false
	indent = indent || 0
	lineHeight = lineHeight || 24
	vertical = vertical || 'top'
	ctx.save()
	ctx.setTextAlign('left')
	ctx.setTextBaseline('normal')
	ctx.setFillStyle(color)
	if (bold) {
		ctx.font = 'normal bold ' + Math.round(fontSize) + 'px sans-serif'
	} else {
		ctx.setFontSize(fontSize)
	}
	let textArr = content.split('')
	let rowArr = [] // 每行文本数组
	let rowText = '' // 当前行文本
	let rowWid = 0 // 当前行宽度
	let lastText = content // 最后一行文本
	for (let i = 0; i < textArr.length; i++) {
		let oMaxWidth = maxWidth
		if (rowArr.length === 0 && indent) {
			oMaxWidth = maxWidth - indent * fontSize
		}
		rowText = rowText + textArr[i]
		rowWid = parseInt(ctx.measureText(rowText + '').width)
		if (rowWid >= oMaxWidth) {
			rowArr.push(rowText)
			lastText = lastText.substr(rowText.length)
			// 重置参数
			rowText = ''
			rowWid = 0
		}
	}
	if (lastText) rowArr.push(lastText)
	let rows = rowArr.length // 行数
	let bY = y
	if (rowArr.length > maxLine) {
		let rowCut = rowArr.slice(0, maxLine-1)
		let group = [rowArr[maxLine]+'...'] //超出的用...表示
		rowArr = [...rowCut,...group]
	}
	if (vertical === 'center' && maxHeight > rows * lineHeight) {
		bY = y + Math.ceil((maxHeight - rows * lineHeight) / 2)
	}
	for (let i = 0; i < rowArr.length; i++) {
		let cY = bY + i * lineHeight
		if (i === 0 && indent) { // 首行缩进
			ctx.fillText(rowArr[i], x + indent * fontSize, cY)
		} else {
			ctx.fillText(rowArr[i], x, cY)
		}
	}
	ctx.restore()
}

// 已废弃
function drawText2(ctx, item) {
	let {
		content,
		width,
		maxLine,
		left,
		top,
		lineHeight,
		color,
		fontSize
	} = item
	content = String(content)
	lineHeight = (lineHeight || 1.3) * fontSize

	// 字体
	ctx.setFontSize(fontSize)
	// 颜色
	ctx.setFillStyle(color)
	// 文本处理
	let strArr = content.split('')
	let row = []
	let temp = ''
	for (let i = 0; i < strArr.length; i++) {
		if (ctx.measureText(temp).width < width) {
			temp += strArr[i]
		} else {
			i-- //这里添加了i-- 是为了防止字符丢失
			row.push(temp)
			temp = ''
		}
	}
	row.push(temp) // row有多少项则就有多少行

	//如果数组长度大于2，现在只需要显示两行则只截取前两项,把第二行结尾设置成'...'
	if (row.length > maxLine) {
		let rowCut = row.slice(0, maxLine)
		let rowPart = rowCut[1]
		let text = ''
		let empty = []
		for (let i = 0; i < rowPart.length; i++) {
			if (ctx.measureText(text).width < width) {
				text += rowPart[i]
			} else {
				break
			}
		}
		empty.push(text)
		let group = empty[0] + '...' //这里只显示两行，超出的用...表示
		rowCut.splice(1, 1, group)
		row = rowCut
	}
	// 把文本绘制到画布中
	for (let i = 0; i < row.length; i++) {
		// 一次渲染一行
		ctx.fillText(row[i], left, top + i * lineHeight, width)
	}
}

// 获取图片信息
function getImageTempPath(url) {
	return new Promise((resolve) => {
		// 网络图片
		if (url.includes('http')) {
			uni.downloadFile({
				url,
				success: (res) => {
					uni.getImageInfo({
						src: res.tempFilePath,
						success: ({
							path
						}) => resolve(path)
					})
				},
				fail: (res) => {
					uni.showToast({
						icon: 'none',
						title: url + res.errMsg
					})
				}
			})
		} else if (url.includes('base64')) {
			// base64图片
			base64Save(url).then((src) => {
				uni.getImageInfo({
					src,
					success: ({
						path
					}) => resolve(path)
				})
			})
		} else {
			// 本地图片
			resolve(url)
		}
	})
}

// base64需要转为本地图片，canvas真机上不支持解析base64
function base64Save(base64File) {
	//base64File 需要加前缀
	const fsm = uni.getFileSystemManager() //获取全局文件管理器
	let extName = base64File.match(/data:\S+\/(\S+);/)
	if (extName) {
		//获取文件后缀
		extName = extName[1]
	}
	//获取自1970到现在的毫秒 + 文件后缀 生成文件名
	let fileName = Date.now() + '.' + extName
	return new Promise((resolve, reject) => {
		//写入文件的路径
		const filePath = uni.env.USER_DATA_PATH + '/' + fileName
		fsm.writeFile({
			filePath,
			data: base64File.replace(/^data:\S+\/\S+;base64,/, ''), //替换前缀为空
			encoding: 'base64',
			success: () => {
				resolve(filePath)
			},
			fail() {
				reject('写入失败')
			}
		})
	})
}
