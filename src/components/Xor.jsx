import style from "@components/Xor.module.css";
import { useEffect, useState } from "react";

export default function Xor({ initMsg = "a", initKey = "G" }) {
  const [msg, setMsg] = useState(initMsg);
  const [key, setKey] = useState(initKey);
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(msg.charCodeAt(0) ^ key.charCodeAt(0));
  }, [msg, key]);

  return (
    <div className={style.xorContainer}>
      <div>
        <pre>{msg}:</pre>
        <pre>{padWithZero(msg.charCodeAt(0).toString(2))}</pre>
      </div>
      <div className={style.borderBottom}>
        <pre>{key}:</pre>
        <pre>{padWithZero(key.charCodeAt(0).toString(2))}</pre>
      </div>
      <div>
        <pre>{String.fromCharCode(result)}:</pre>
        <pre>{padWithZero(result.toString(2))}</pre>
      </div>
    </div>
  );
}

function padWithZero(value, length = 8) {
  const rev = value.split("").reverse();
  const padLength = Math.max(length - rev.length, 0);
  const res = [...rev, Array(padLength).fill("0")].flat().reverse().join("");
  return res;
}
