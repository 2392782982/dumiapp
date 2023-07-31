export interface BacktopProps {
    // 要想文档中有 api 必须这么写注释.

    /**
     * @description 类名
     */
    className?: string;

    /**
     * @description 控制其显示位置, 距离页面右边距
     */
    right?: Number;

    /**
     * @description 控制其显示位置, 距离页面底部距离
     */
    bottom?: Number;




}
export interface ButtonStyle {

    className?: string,
    right?: Number,
    bottom?: Number
}
export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
