import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { SkeletonUtils } from "three-stdlib";
import { userAtom } from "./SocketManager";

const MOVEMENT_SPEED = 0.05;
const SKIN_COLOR = "#c9b19c";

export function WebcupAvatar({ bodyColor, id, ...props }) {
  const group = useRef();
  const { materials, animations, scene } = useGLTF("/models/WebcupAvatar.glb");
  const { actions } = useAnimations(animations, group);
  const position = useMemo(() => props.position, []);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const [user] = useAtom(userAtom);

  const [animation, setAnimation] = useState("CharacterArmature|Idle");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32).stop();
  }, [animation]);

  useFrame((state) => {
    if (group.current.position.distanceTo(props.position) > 0.1) {
      const direction = group.current.position
        .clone()
        .sub(props.position)
        .normalize()
        .multiplyScalar(MOVEMENT_SPEED);
      group.current.position.sub(direction);
      group.current.lookAt(props.position);

      setAnimation("CharacterArmature|Run");
    } else {
      setAnimation("CharacterArmature|Idle");
    }

    if (id === user) {
      state.camera.position.x = group.current.position.x + 8;
      state.camera.position.y = group.current.position.y + 8;
      state.camera.position.z = group.current.position.z + 8;
      state.camera.lookAt(group.current.position);
    }
  });

  return (
    <group
      ref={group}
      {...props}
      position={position}
      dispose={null}
      scale={0.3}
    >
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group name="Body_1" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Body_2"
              geometry={nodes.Body_2.geometry}
              material={materials.Main}
              skeleton={nodes.Body_2.skeleton}
            >
              <meshStandardMaterial color={bodyColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Body_3"
              geometry={nodes.Body_3.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Body_3.skeleton}
            >
              <meshStandardMaterial color={SKIN_COLOR} />
            </skinnedMesh>
            <skinnedMesh
              name="Body_4"
              geometry={nodes.Body_4.geometry}
              material={materials.Main2}
              skeleton={nodes.Body_4.skeleton}
            >
              <meshStandardMaterial color={SKIN_COLOR} />
            </skinnedMesh>
          </group>
          <skinnedMesh
            name="Ears"
            geometry={nodes.Ears.geometry}
            material={materials.Main}
            skeleton={nodes.Ears.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <meshStandardMaterial color={bodyColor} />
          </skinnedMesh>
          <group name="Head_1" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Head_2"
              geometry={nodes.Head_2.geometry}
              material={materials.Main}
              skeleton={nodes.Head_2.skeleton}
            >
              <meshStandardMaterial color={bodyColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Head_3"
              geometry={nodes.Head_3.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Head_3.skeleton}
            >
              <meshStandardMaterial color={SKIN_COLOR} />
            </skinnedMesh>
            <skinnedMesh
              name="Head_4"
              geometry={nodes.Head_4.geometry}
              material={materials.EyeColor}
              skeleton={nodes.Head_4.skeleton}
            ></skinnedMesh>
            <skinnedMesh
              name="Head_5"
              geometry={nodes.Head_5.geometry}
              material={materials.White}
              skeleton={nodes.Head_5.skeleton}
            ></skinnedMesh>
            <skinnedMesh
              name="Head_6"
              geometry={nodes.Head_6.geometry}
              material={materials.Black}
              skeleton={nodes.Head_6.skeleton}
            ></skinnedMesh>
          </group>
          <group name="Arms" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Arms_1"
              geometry={nodes.Arms_1.geometry}
              material={materials.Main}
              skeleton={nodes.Arms_1.skeleton}
            >
              <meshStandardMaterial color={bodyColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Arms_2"
              geometry={nodes.Arms_2.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Arms_2.skeleton}
            >
              <meshStandardMaterial color={SKIN_COLOR} />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/WebcupAvatar.glb");
