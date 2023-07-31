export interface DividerProps {
    // 要想文档中有 api 必须这么写注释.

    /**
     * @description 类型
     */
    text?: any;

    /**
     * @description 设置文案
     * @default false
     */
    SetCopy?: Boolean;

    /**
     * @description 垂直分割
     * @default false
     * 
     */
    contentPosition?: Boolean;

    

}
export interface ButtonStyle {

    text?: any,
    SetCopy?: Boolean,
    contentPosition?: Boolean
}
export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
