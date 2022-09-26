<template>
	<view class="date">
		<view class="date-icon t-icon t-icon-dingshi" :class="isDone?'date-boom':''"></view>
		<view class="data-ddl">截止日期:{{ timeFormat(ddl) }}</view>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from "vue"
	import {
		timeFormat
	} from "@/utils/format/time.js"
	const props = defineProps({
		ddl: {
			type: Number,
			default: 1
		},
		isDone:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss" scoped>
	@import "../../../node_modules/mathsass/dist/math";

	.date {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-top: 6px;

		.date-icon {
			width: 45rpx;
			height: 45rpx;
		}

		.data-ddl {
			margin-left: 3px;
			color: darkblue;
			font-weight: bold;
			font-size: 30rpx;
		}

		$bubble-d: 120rpx;
		$bubble-r: .5*$bubble-d;
		$sparkle-d: 12.75rpx;
		$sparkle-r: .5*$sparkle-d;

		@mixin sparkles($k) {
			$shadow-list: ();
			$n-groups: 9;
			$group-base-angle: 40deg;
			$group-distr-r: (1 + $k*.25)*$bubble-r;
			$n-sparkles: 2;
			$sparkle-base-angle: 180deg; 
			$sparkle-off-angle: 60deg; // offset angle from radius
			$spread-r: -$k*$sparkle-r;

			@for $i from 0 to $n-groups {
				$group-curr-angle: $i*$group-base-angle - 90deg;
				$xg: $group-distr-r*cos($group-curr-angle);
				$yg: $group-distr-r*sin($group-curr-angle);

				@for $j from 0 to $n-sparkles {
					$sparkle-curr-angle: $group-curr-angle + $sparkle-off-angle + $j*$sparkle-base-angle;
					$xs: $xg + $sparkle-d*cos($sparkle-curr-angle);
					$ys: $yg + $sparkle-d*sin($sparkle-curr-angle);

					$shadow-list: $shadow-list, $xs $ys 0 $spread-r hsl(($i + $j)*$group-base-angle, 100%, 75%);
				}
			}

			box-shadow: $shadow-list;
		}

		@mixin bubble($ext) {
			transform: scale(1);
			border-color: #545461;
			border-width: $ext;
		}

		// &:before,
		// &:after {
		// 	position: absolute;
		// 	left: 20px;
		// 	border-radius: 50%;
		// 	content: '';
		// }

		// &:after {
		// 	margin: -$sparkle-r;
		// 	width: $sparkle-d;
		// 	height: $sparkle-d;
		// 	@include sparkles(1);
		// }

		// &:hover {
		// 	&:after {
		// 		animation: sparkles 500ms ease-in-out;
		// 	}

		// }

		&-boom{
			&:before,
			&:after {
				position: absolute;
				left: 40px;
				bottom: 45px;
				border-radius: 50%;
				content: '';
			}
			
			&:after {
				margin: -$sparkle-r;
				width: $sparkle-d;
				height: $sparkle-d;
				@include sparkles(1);
			}
			&:after {
				animation: sparkles 500ms ease-in-out;
			}
		}
			

		

		@keyframes sparkles {

			0%,
			10% {
				opacity: 0;
				transform: scale(0);
			}

			15% {
				opacity: 1;
				transform: scale(1.2) rotate(-20deg);
				@include sparkles(0);
			}
		}

	}
</style>
