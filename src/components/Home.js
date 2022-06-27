import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";

const notify = (msg, { success }) => {
    if (success) {
        return toast.success(msg)
    }
    else {
        return toast.error(msg)
    }
}

// connect to socket server on /api proxy
const socket = io("/api");
