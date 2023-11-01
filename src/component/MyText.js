import mycss from "../style/mystyle.module.css";
export function MyText() {
  return (
    <div>
      {/* red 배경색, white 글자색 */}
      {/* src/style/mystyle.module.css 파일 생성 */}
      <h1 className={[mycss.coffee, mycss.error, mycss.special].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={`${mycss.coffee} ${mycss.special} ${mycss.error}`}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
