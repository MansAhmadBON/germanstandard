import React from "react";
import TableRow from "./components";

function TBody({playlistForShow}) {
    return (
        <tbody>
            <TableRow
                playlistForShow={playlistForShow}
            />
        </tbody>
    )
}

export default TBody;