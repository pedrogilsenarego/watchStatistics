/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
	const group = useRef();
	const { nodes } = useGLTF("/whiteBox.glb");
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes["Part_Studio_1_-_Part_1_(8)"].geometry}
				material={nodes["Part_Studio_1_-_Part_1_(8)"].material}
			/>
		</group>
	);
}

useGLTF.preload("/whiteBox.glb");
