import React from "react";
import TableRow from "./components";

function TBody({playlistForShow}) {

    console.log(playlistForShow);

    return (
        <tbody>
            <TableRow
                playlistForShow={playlistForShow}
            />
        </tbody>
    )
}

export default TBody;