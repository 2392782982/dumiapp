export interface InputProps {
    // 要想文档中有 api 必须这么写注释.

    /**
     * @description 类型
     * @default text	
     */
    type?: string;

    /**
     * @description 是否禁用
     * @default false
     */
    disabled?: Boolean;

    /**
     * @description input里的内容
     */
    defaultValue?: any;

    /**
    * @description 输入的内容
    */
    value?: string;

}
export interface ButtonStyle {

    value?:string,
    type?:string,
    disabled?:Boolean,
    defaultValue?:any
}
export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
