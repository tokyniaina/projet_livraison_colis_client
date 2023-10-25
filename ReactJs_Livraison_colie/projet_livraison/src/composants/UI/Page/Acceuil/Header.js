import React from "react";
import headers from "./header.module.css";
import MainMod from "./styles/css/main.module.css"
import BooThemMod from "./styles/css/bootstrap-theme.module.css"

export default function Header() {
  const style = `${MainMod.head}`;
  const styleBtn1=`btn btn ${MainMod.btnDefault} ${BooThemMod.btnLg}`
  const styleBtn2=`btn btn-download ${BooThemMod.btnAction}  ${BooThemMod.btnLg}`
  return (
    <>
      <header className={style}>
        <div className="container">
          <div className="row">
            <h1 className={MainMod.lead}>AWESOME, CUSTOMIZABLE, FREE</h1>
            <p className={MainMod.tagline}>
              PROGRESSUS: free business bootstrap template by{" "}
              <a href="https://www.gettemplate.com/?utm_source=progressus&amp;utm_medium=template&amp;utm_campaign=progressus">
                GetTemplate
              </a>
            </p>
            <p>
              <a
                href="https://www.gettemplate.com/"
                className={styleBtn1}
                role="button"
              >
                MORE INFO
              </a>{" "}
              <a
                className={styleBtn2}
                href="https://www.gettemplate.com/downloads/progressus.zip"
                role="button"
              >
                DOWNLOAD NOW
              </a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
