import React from 'react'

const ListsKeys = () => {
    // let lang = "js";
    // let langs = ["HTML", "css", "Js"]
    let langs = [{id:1,lang:"HTML"},{id:2,lang:"CSS"},{id:2,lang:"js"}]
  return (
    <div>
        <h1>Lists & keys in react</h1>
        {/* <p>{lang}</p> */}
        {/* <p>{langs}</p> */}

        {
            langs.map(
                // (l,index)=><li key={index}>{l}</li>
                (l,index)=><li key={l.id}>{l.lang}</li>
            )
        }

    </div>
  )
}

export default ListsKeys
