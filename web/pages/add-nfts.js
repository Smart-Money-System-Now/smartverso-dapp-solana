
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React,{useEffect, useState} from "react";
import Spline from '@splinetool/react-spline';



export default function App() {
    return (
      
        <Spline
          className={styles.spline}
          
          scene="https://prod.spline.design/KinqTlbdrfXqxieJ/scene.splinecode"
        />        
    );
  }
  



  
