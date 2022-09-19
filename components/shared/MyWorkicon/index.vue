<template>
	<view class="workicon-jump">
		<view class="workicon t-icon t-icon-a-22"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.workicon{	
	display: flex;
	margin: 5px 10px;
	width: 40px;
	height: 40px;
	
	// filter: drop-shadow(0 0.5px 1px #19080aa3);
	&:hover{
		animation: breath 0.4s ease 2 ;
	}
}
@keyframes breath {
	0%{
		transform: scale(1, 1);
	}
	50%{
		transform: scale(0.8, 1.3);
	}
	100%{
		transform: scale(1, 1);
	}
}
</style>