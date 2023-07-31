export interface InputNumberProps {
    // 要想文档中有 api 必须这么写注释.

    /**
     * @description 数字值
     */
    value: number;

    /**
     * @description 按钮点击回调事件
     */
    onChange: Function;

    /**
     * @description 禁止状态
     * @default 	false
     */
    disabled?: Boolean;

    /**
    * @description 递增递减的倍数
     * @default 	10
    */
    step?: Number;


}
export interface ButtonStyle {
    value: number;
    onChange: (value: number) => void;
    disabled?: Boolean,
    step?: number
}
export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
