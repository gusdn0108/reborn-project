import React, { useState } from "react";
import Stack from "@mui/material/Stack";
// import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import questionImg from "../img/물음표.png"
import a from "../MainImg/낚시카페.jpg"
import b from "../MainImg/롤러장.jpg"
import c from "../MainImg/만화카페.jpg"
import d from "../MainImg/보드게임카페.jpg"
import e from "../MainImg/스포츠 몬스터.jpg"
import f from "../MainImg/식물원데이트.jpg"
import g from "../MainImg/아이스링크.jpg"
import h from "../MainImg/아쿠아리움.jpg"
import i from "../MainImg/이케아 쇼핑.jpg"
import j from "../MainImg/VR게임방.jpg"
// ----------------------------------------------------- 10개


const all = [a, b, c, d, e, f, g, h, i, j];

export default function Main() {
    const [selected, setSelected] = useState("");
    const [randomImg, setRandomimg] = useState();
    const [isLoadding, setIsLoadding] = useState(false)
    //   let randomImg = aImg;
    const clickSearch = () => {
        if (selected === "") {
            const idx = Math.floor(Math.random() * 10);
            setRandomimg(all[idx]);
        }
    };

    // const clickAll = () => {
    //     setSelected('all');
    // };

    return (
        <div>
            {selected}
            <Stack spacing={5} direction="row">
                <Typography componet="h2" variant="h5" gutterBottom></Typography>
                {/* <Button onClick={clickAll} variant="outlined" size="large" color="secondary" style={{ width: "300px" }}>
                    전체
                </Button> */}
            </Stack>
            <Stack>{randomImg ? <img src={randomImg} style={{ width: 300, height: 300 }}></img> : <img src={questionImg} style={{ width: 300, height: 300 }}></img>}</Stack>
            <Stack spacing={10} direction="row">
                <Button onClick={clickSearch} variant="outlined" size="large" color="secondary" style={{ width: "300px" }}>
                    검색
                </Button>
            </Stack>
        </div>
    );
}