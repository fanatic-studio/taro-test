import { createApp } from "vue";
import { createPinia } from "pinia";
import {
	Button,
	Toast,
	Tabs,
	TabPane,
	Progress,
	Icon,
	Collapse,
	CollapseItem,
	Elevator,
	Grid,
	GridItem,
	SideNavBar,
	SubSideNavBar,
	SideNavBarItem,
	Popup,
	OverLay,
} from "@nutui/nutui-taro";
import "./app.scss";

const App = createApp({
	onShow() {},
	// 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Button)
	.use(Toast)
	.use(Tabs)
	.use(TabPane)
	.use(Progress)
	.use(Icon)
	.use(Collapse)
	.use(CollapseItem)
	.use(Elevator)
	.use(Grid)
	.use(GridItem)
	.use(SideNavBar)
	.use(SubSideNavBar)
	.use(SideNavBarItem)
	.use(Popup)
	.use(OverLay);
App.use(createPinia());
export default App;
