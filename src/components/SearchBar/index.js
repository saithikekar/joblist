import React, { useState } from 'react';
import {Box,Button,Select,MenuItem,makeStyles,CircularProgress} from "@material-ui/core";

const useStyles=makeStyles({
    wrapper:{
        backgroundColor:"#fff",
        display:"flex",
        boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
        borderRadius:"5px",
        "& > * ":{
            flex:1,
            height:"45px",
            margin:"8px",
        },
    }
});

export default (props) =>{
    const[loading,setLoading]=useState(false);

    const [jobSearch,setJobSearch]=useState({
        type:"Full Time",
        location:"Remote",
    });

    const handleChange = (e) =>{
        e.persist();
        setJobSearch(oldState =>({
            ...oldState,
            [e.target.name]:e.target.value
        }));
    }

    const search = async ()=>{
        setLoading(true);
        await props.fetchCustomJobs(jobSearch);
        setLoading(false);
    }

    const classes=useStyles();
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled" >
                <MenuItem value="Full Time">Mumbai</MenuItem>
                <MenuItem value="Part Time">Pune</MenuItem>
                <MenuItem value="Part Time">Thane</MenuItem>
                <MenuItem value="Part Time">Raigad</MenuItem>
                <MenuItem value="Part Time">Jalgaon</MenuItem>
                <MenuItem value="Part Time">Solapur</MenuItem> 
                <MenuItem value="Part Time">Rajapur</MenuItem>
                <MenuItem value="Part Time">Ratnagiri</MenuItem>
                <MenuItem value="Part Time">Kalyan</MenuItem>
                <MenuItem value="Part Time">Badlapur</MenuItem>
                <MenuItem value="Part Time">Dholakpur</MenuItem>
                <MenuItem value="Part Time">Nagpur</MenuItem>
                <MenuItem value="Part Time">Navi Mumbai</MenuItem>
                <MenuItem value="Part Time">Dharavee</MenuItem>
                <MenuItem value="Part Time">Vasai</MenuItem>
                {/* <MenuItem value="Part Time"></MenuItem> */}
                {/* <MenuItem value="Part Time">Pune</MenuItem> */}
                {/* <MenuItem value="Part Time">Pune</MenuItem>0 0 */}
                <MenuItem value="Contract">Palghar</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled" >
                <MenuItem value="Remote">Astitva</MenuItem>
                <MenuItem value="In-office">Aai Care </MenuItem>
                <MenuItem value="In-office">Apnalaya </MenuItem>
                <MenuItem value="In-office">Child Vision Foundation </MenuItem>
                <MenuItem value="In-office">OXFAM </MenuItem>
                <MenuItem value="In-office">GreenPeace Foundation </MenuItem>
                <MenuItem value="In-office">Goorj </MenuItem>
                <MenuItem value="In-office">Nazar </MenuItem>
                <MenuItem value="In-office">Ves NGO </MenuItem>
                <MenuItem value="In-office">NAYAN foundation </MenuItem>
                <MenuItem value="In-office">Zubaan Teeth Donation Camp </MenuItem>
                <MenuItem value="In-office">Naakandanis</MenuItem>
            </Select>
            <Button 
                variant="contained" 
                color="#03a9f4" 
                disabledElevation
                onClick={search}    
            >
                {loading ? (<CircularProgress color="secondary" size={22} />
                    ) : (   
                        "Search"
                    )}
            </Button>
        </Box>
    )
}