/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF("/watch.glb");
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes["website_-_Bezel"].geometry}>
				{" "}
				<meshPhysicalMaterial
					//map={colorMap}
					color="lightGrey"
					clearcoat="1.0"
					metalness="0.9"
					clearcoatRoughness="0.1"
					roughness="0.5"
					envMaps="reflection"
				/>{" "}
			</mesh>
			<mesh
				geometry={nodes["website_-_Case"].geometry}
				material={nodes["website_-_Case"].material}
			/>
			<mesh geometry={nodes["website_-_Crown"].geometry}>
				<meshPhysicalMaterial
					//map={colorMap}
					color="lightBlue"
					clearcoat="1.0"
					metalness="0"
					clearcoatRoughness="0.1"
					roughness="0.5"
					envMaps="reflection"
				/>{" "}
			</mesh>
			<mesh geometry={nodes["website_-_Glass"].geometry}>
				<meshPhysicalMaterial
					//map={colorMap}
					color="lightBlue"
					clearcoat="1.0"
					opacity="0.6"
					metalness="0"
					transmission="1.0"
					clearcoatRoughness="0.1"
					roughness="0.2"
					ior="1"
					reflectivity="0.5"
					envMaps="reflection"
				/>{" "}
			</mesh>
			<mesh
				geometry={nodes["website_-_Hours"].geometry}
				material={nodes["website_-_Hours"].material}
			/>
			<mesh
				geometry={nodes["website_-_Minutes"].geometry}
				material={nodes["website_-_Minutes"].material}
			/>
			<mesh
				geometry={nodes["website_-_Part_8"].geometry}
				material={nodes["website_-_Part_8"].material}
			/>
		</group>
	);
}

useGLTF.preload("/watch.glb");
