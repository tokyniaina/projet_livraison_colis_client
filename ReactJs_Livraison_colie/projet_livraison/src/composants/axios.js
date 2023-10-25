import axios from "axios";
import React, { useEffect } from "react";

export const dataUser = useEffect(() => {
    axios.get("http://localhost:4000/api/users")
      .then((res) => res.json().then(res.data))
  }, [])