import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div >
           <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile;