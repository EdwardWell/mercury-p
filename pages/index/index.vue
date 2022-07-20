<template>
	<view class="container f16 flex flex-column">
		
		<!-- <uni-section title="数字角标" type="line"></uni-section>
		<view class="example-bodyflex-row">
			<uni-badge text="1"></uni-badge>
		</view> -->
		
		<!-- <uni-section title="日历" type="line"></uni-section>
		<view class="example-bodyflex-row">
			<uni-calendar @change="change" />
		</view> -->
		
		<!-- <uni-section title="卡片" type="line"></uni-section>
		<view class="example-bodyflex-row">
			<uni-card title="标题文字" thumbnail="xxx.jpg" extra="额外信息" note="Tips">内容主体，可自定义内容及样式</uni-card>
		</view> -->
		
		<uni-section title="倒计时" type="line"></uni-section>
		<view class="example-body p16 flex-row">
			<uni-countdown :day="1" :hour="2" :minute="3" :second="4"></uni-countdown>
		</view>
		
		<uni-section title="抽屉" type="line"></uni-section>
		<view class="example-body p16 flex-row">
			<button class="button" type="primary" @click="drawer()">
				<text class="button-text">{{mode == 'right'?'右':'左'}}侧</text>
			</button>
		</view>
		
		<uni-section title="弹出层" type="line"></uni-section>
		<view class="example-body p16 flex-row">
			<button class="button" type="primary" @click="toggle('top')">
				<text class="button-text">顶部</text>
			</button>
			<button class="button" type="primary" @click="toggle('bottom')">
				<text class="button-text">底部</text>
			</button>
			<button class="button" type="primary" @click="toggle('center')">
				<text class="button-text">居中</text>
			</button>
			<button class="button" type="primary" @click="toggle('left')">
				<text class="button-text">左侧</text>
			</button>
			<button class="button" type="primary" @click="toggle('right')">
				<text class="button-text">右侧</text>
			</button>
		</view>

		<uni-section title="提示消息" type="line"></uni-section>
		<view class="example-body p16 flex-row">
			<button class="button popup-success" @click="messageToggle('success')">
				<text class="button-text success-text">成功</text>
				</button>
			<button class="button popup-error" @click="messageToggle('error')">
				<text class="button-text error-text">失败</text>
			</button>
			<button class="button popup-warn" @click="messageToggle('warn')">
				<text class="button-text warn-text">警告</text>
			</button>
			<button class="button popup-info" @click="messageToggle('info')">
				<text class="button-text info-text">信息</text>
			</button>
		</view>

		<uni-section title="对话框示例" type="line"></uni-section>
		<view class="example-body p16 flex-row">
			<button class="button popup-success" @click="dialogToggle('success')">
				<text class="button-text success-text">成功</text>
			</button>
			<button class="button popup-error" @click="dialogToggle('error')">
				<text class="button-text error-text">失败</text>
			</button>
			<button class="button popup-warn" @click="dialogToggle('warn')">
				<text class="button-text warn-text">警告</text>
			</button>
			<button class="button popup-info" @click="dialogToggle('info')">
				<text class="button-text info-text">信息</text>
			</button>
		</view>
		
		<uni-section title="输入框示例" type="line"></uni-section>
		<view class="example-body p16 dialog">
			<view class="dialog-box">
				<text class="dialog-text">输入内容：{{ value }}</text>
			</view>
			<button class="button" type="primary" @click="inputDialogToggle">
				<text class="button-text">输入对话框</text>
			</button>
		</view>

		<uni-section title="底部分享示例" type="line"></uni-section>
		<view class="example-body p16 share hideOnPc">
			<button class="button" type="primary" @click="shareToggle">
				<text class="button-text">分享模版示例</text>
			</button>
		</view>

		<view>
			<!-- 普通弹窗 -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<text class="text">popup 内容</text>
				</view>
			</uni-popup>
			<uni-popup ref="popup2" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
					<text class="text">popup 内容</text>
				</view>
			</uni-popup>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose" mode="input" title="输入内容" value="对话框预置提示内容!" :beforeClose="true"
					placeholder="请输入内容" @confirm="inputDialogConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 分享示例 -->
			<uni-popup ref="share" background-color="#fff" type="share">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
		
		<view>
			<!-- 抽屉示例 -->
			<uni-drawer ref="drawer" :mode="mode">
				<view class="popup-content popup-height">
					<text class="text">{{mode}}</text>
				</view>
			</uni-drawer>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
				value: '',
				mode:'right'

			}
		},
		created() {
			console.log(uni.Mercury)
		},
		methods: {
			change(e) {
				console.log(e)
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type);
			},
			messageToggle(type) {
				this.msgType = type
				this.messageText = `这是一条${type}消息提示`
				this.$refs.message.open()
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				console.log('点击确认')
				this.messageText = `点击确认了 ${this.msgType} 窗口`
				this.$refs.message.open()
			},
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			dialogClose() {
				console.log('点击关闭')
			},
			inputDialogConfirm(val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 3000)
			},
			shareToggle() {
				this.$refs.share.open()
			},
			drawer() {
				console.log('mode：' + this.mode +'，tips：mode只在初始化生效')
				this.$refs.drawer.open();
			},
			
		}
	}
</script>

<style>
	.container {
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.example-body {
		background-color: #ffffff;
	}

	.word-btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.button {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 35px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.popup-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		height: 100%;
		flex: 1;
		width: 200px;
	}

	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-success {
		color: #fff;
		background-color: #e1f3d8;
	}

	.popup-warn {
		color: #fff;
		background-color: #faecd8;
	}

	.popup-error {
		color: #fff;
		background-color: #fde2e2;
	}

	.popup-info {
		color: #fff;
		background-color: #f2f6fc;
	}

	.success-text {
		color: #09bb07;
	}

	.warn-text {
		color: #e6a23c;
	}

	.error-text {
		color: #f56c6c;
	}

	.info-text {
		color: #909399;
	}

	.dialog,
	.share {
		display: flex;
		flex-direction: column;
	}

	.dialog .button,
	.share .button {
		width: 100%;
		margin: 0;
		margin-top: 10px;
		padding: 3px 0;
		flex: 1;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}
</style>
