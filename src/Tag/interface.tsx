export interface TagProps {
    // 要想文档中有 api 必须这么写注释.

    /**
     * @description 类型
     * @default text	
     */
    type?: string;

    /**
     * @description 文本内容
     */
    text?: string;

    /**
     * @description 宽
     */
    width?: Number;

    /**
    * @description 高
    */
    height?: Number;

  /**
    * @description 可移除
     * @default 	false
    */
  effect?: Boolean;

}
export interface ButtonStyle {

    text?: string,
    type?: string,
    width?: Number,
    height?: Number,
    effect?: Boolean
}
export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
