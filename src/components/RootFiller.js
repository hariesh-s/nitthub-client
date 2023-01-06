import { Box, Button, Modal, Typography, FormControl, InputLabel, Select, MenuItem, TextField, } from '@mui/material';
import Typical from 'react-typical';
import { useState } from 'react';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        width: 200,
        "& .MuiOutlinedInput-input": {
            color: "green"
        },
        "& .MuiInputLabel-root": {
            color: "green"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "green"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "red"
        },
        "&:hover .MuiInputLabel-root": {
            color: "red"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "purple"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "purple"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        }
    }
});

function RootFiller() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [course, setCourse] = useState("");
    const [prof, setProf] = useState("");
    const classes = useStyles();
    function updateQuery(e) {
        setQuery(e.target.value)
    }

    function updateCourse(e) {
        setCourse(e.target.value)
    }

    function updateProf(e) {
        setProf(e.target.value)
    }

    function sendRequest(e) {

    }


    return (
        <Box sx={{
            background: "#00171f",
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "-1",
            width: "100vw",
            height: "75vh", // paddingTop is 25vh
            paddingTop: "25vh",
            fontFamily: "Poppins",
            fontSize: 40,
            color: "white",
            display: "flex",
            justifyContent: "center",
        }}>
            <Typical
                steps={["literally anything !", 1000, "notes", 1000, "PYQs", 1000, "e-books", 1000, "pdfs", 1000]}
                loop={Infinity}
                wrapper="h1"
            />
            <Button
                variant="contained"
                disableElevation
                size="large"
                sx={{
                    position: "absolute",
                    bottom: "40px",
                    background: "transparent",
                    color: "#ee6c4d",
                    border: "1px solid #ee6c4d",
                    fontFamily: "inherit",
                    textTransform: "none",
                    "&:hover": {
                        background: "#ee6c4d",
                        color: "#fff",
                        border: "none",
                    },
                }}
                onClick={() => setOpen(true)}
            >
                Advanced Search
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        padding: "40px 48px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                        borderRadius: "16px",
                        background: "#ee6c4d",
                    }}
                    component="form"
                >
                    <TextField
                        id="searchText"
                        variant="outlined"
                        placeholder="I'm looking for ..."
                        sx={{
                            input: {
                                color: "#000",
                                padding: 2,
                                fontFamily: "Poppins",
                                fontSize: 16,
                            },
                            "& .MuiOutlinedInput-root": {
                                background: "#fff",
                            },
                            display: "flex",
                            width: "100%",
                        }}
                        onChange={updateQuery}
                        className={classes.root}
                    ></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="course">Course</InputLabel>
                        <Select
                            labelId="course"
                            id="course"
                            value={course}
                            label="Course"
                            onChange={updateCourse}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="prof" sx={{
                            color: "red",
                            "& .MuiInputLabel-root": {
                                color: "red",
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                color: 'red',
                            },
                            "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused #prof": {
                                color: 'red',
                            },
                            "&.Mui-focused #prof": {
                                color: "red",
                            }
                        }}
                        >
                            Professor</InputLabel>
                        <Select
                            labelId="prof"
                            id="prof"
                            value={prof}
                            label="Professor"
                            onChange={updateProf}
                            sx={{
                                background: "transparent",
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'red',
                                },

                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="select" label="Age" value="20" className={classes.root} select>
                        <MenuItem value="10">Ten</MenuItem>
                        <MenuItem value="20">Twenty</MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        disableElevation
                        size="large"
                        sx={{
                            background: "transparent",
                            color: "#00171f",
                            border: "1px solid #00171f",
                            fontFamily: "Poppins",
                            textTransform: "none",
                            "&:hover": {
                                background: "#00171f",
                                color: "#fff",
                                border: "none",
                            },

                            alignSelf: "center",
                        }}
                        onSubmit={sendRequest}
                    >
                        Search
                    </Button>
                </Box>
            </Modal >
        </Box >
    )
}

export default RootFiller;