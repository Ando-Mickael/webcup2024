import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:1234");
export const charactersAtom = atom([]);
export const userAtom = atom(null);

export const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  const [_user, setUser] = useAtom(userAtom);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }

    function onHello(value) {
      console.log("hello");
      setUser(value.id);
      setCharacters(value);
    }

    function onCharacters(value) {
      setCharacters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
    };
  }, []);
};
