"use client"
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';
import React from 'react'
import {jwtDecode} from "jwt-decode"
import { signIn } from '@/auth';
import { googleAutoAuth } from '@/actions/auth';
const GoogleLoginPromp = () => {
       useGoogleOneTapLogin({
           onSuccess: async(credentialResponse) => {
               const data = jwtDecode(credentialResponse.credential as string);
               const res=await googleAutoAuth({ ...data, type: "GoogleAutoLogin" });
              //  console.log({data,res});
           },
           onError: () => {
               console.log('Login Failed');
           },
           auto_select: true
       });
  return (
      // <></>
      <GoogleLogin
          onSuccess={async(credentialResponse) => {
              const data = jwtDecode(credentialResponse.credential as string);
              const res = await googleAutoAuth({ ...data, type: "GoogleAutoLogin" });
          }}
          onError={() => {
              console.log('Login Failed');
          }}
        //   useOneTap
          ux_mode='popup'
        />
  )
}

export default GoogleLoginPromp