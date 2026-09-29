import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function DeveloperCharacter() {
  const character = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const pointer = useRef(new THREE.Vector2())
  const motionEnabled = useRef(true)

  useEffect(() => {
    motionEnabled.current = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!motionEnabled.current) return
    const trackPointer = (event: PointerEvent) => pointer.current.set((event.clientX / window.innerWidth) * 2 - 1, 1 - (event.clientY / window.innerHeight) * 2)
    window.addEventListener('pointermove', trackPointer, { passive: true })
    return () => window.removeEventListener('pointermove', trackPointer)
  }, [])

  useFrame((state, delta) => {
    if (!motionEnabled.current) return
    const elapsed = state.clock.elapsedTime
    const step = 1 - Math.exp(-Math.min(delta, 0.05) * 4)
    if (character.current) {
      character.current.position.y = -1.22 + Math.sin(elapsed * 1.1) * 0.065
      character.current.rotation.z = Math.sin(elapsed * 0.55) * 0.015
      character.current.position.x = 0.13 + pointer.current.x * 0.035
    }
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, pointer.current.x * 0.3, 5, delta)
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, -pointer.current.y * 0.17, 5, delta)
      head.current.rotation.y += Math.sin(elapsed * 0.75) * 0.006 * step
    }
  })

  return (
    <group ref={character} position={[0.13, -1.22, 0]}>
      <mesh position={[0, -0.12, 0]} scale={[0.73, 0.88, 0.4]} castShadow><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial color="#27665f" roughness={0.72} /></mesh>
      <mesh position={[0, -0.17, 0.345]} scale={[0.34, 0.76, 0.13]}><sphereGeometry args={[1, 24, 24]} /><meshStandardMaterial color="#e8d5bd" roughness={0.86} /></mesh>
      <mesh position={[0, 0.42, 0.1]} rotation={[0, 0, Math.PI]} scale={[0.38, 0.24, 0.17]}><coneGeometry args={[1, 1, 4]} /><meshStandardMaterial color="#f4a34e" roughness={0.65} /></mesh>
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 0.57, -0.22, 0]} rotation={[0, 0, side * -0.17]}>
          <mesh position={[side * 0.02, -0.37, 0]} rotation={[0, 0, side * 0.13]} castShadow><capsuleGeometry args={[0.19, 0.53, 5, 12]} /><meshStandardMaterial color="#1e5755" roughness={0.72} /></mesh>
          <mesh position={[side * 0.05, -0.72, 0.04]}><sphereGeometry args={[0.19, 16, 16]} /><meshStandardMaterial color="#c9876c" roughness={0.8} /></mesh>
        </group>
      ))}
      <mesh position={[0, -0.9, -0.02]} scale={[0.48, 0.28, 0.32]}><sphereGeometry args={[1, 24, 20]} /><meshStandardMaterial color="#143943" roughness={0.8} /></mesh>
      <group ref={head} position={[0, 1.2, 0.03]}>
        <mesh scale={[0.49, 0.57, 0.43]} castShadow><sphereGeometry args={[1, 40, 32]} /><meshStandardMaterial color="#d99e7f" roughness={0.78} /></mesh>
        <mesh position={[0, 0.33, -0.035]} scale={[0.51, 0.34, 0.45]} castShadow><sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color="#202635" roughness={0.84} /></mesh>
        {[-1, 1].map((side) => (
          <group key={side}>
            <mesh position={[side * 0.44, -0.12, 0.02]} scale={[0.12, 0.36, 0.16]}><sphereGeometry args={[1, 20, 20]} /><meshStandardMaterial color="#202635" roughness={0.84} /></mesh>
            <mesh position={[side * 0.45, -0.16, 0.12]} scale={[0.075, 0.12, 0.06]}><sphereGeometry args={[1, 16, 16]} /><meshStandardMaterial color="#d99e7f" roughness={0.82} /></mesh>
            <mesh position={[side * 0.18, 0.025, 0.383]} scale={[0.075, 0.046, 0.035]}><sphereGeometry args={[1, 18, 16]} /><meshStandardMaterial color="#f8eee3" roughness={0.55} /></mesh>
            <mesh position={[side * 0.18, 0.025, 0.414]} scale={[0.027, 0.034, 0.018]}><sphereGeometry args={[1, 16, 14]} /><meshStandardMaterial color="#263440" roughness={0.4} /></mesh>
            <mesh position={[side * 0.18, 0.11, 0.382]} rotation={[0, 0, side * -0.1]} scale={[0.09, 0.018, 0.025]}><sphereGeometry args={[1, 16, 12]} /><meshStandardMaterial color="#3a2828" roughness={0.8} /></mesh>
          </group>
        ))}
        <mesh position={[0, -0.11, 0.41]} scale={[0.055, 0.08, 0.065]}><sphereGeometry args={[1, 16, 16]} /><meshStandardMaterial color="#c9876c" roughness={0.68} /></mesh>
        <mesh position={[0, -0.28, 0.389]} scale={[0.085, 0.025, 0.025]}><sphereGeometry args={[1, 18, 12]} /><meshStandardMaterial color="#925b55" roughness={0.72} /></mesh>
        <mesh position={[0, -0.64, 0]}><cylinderGeometry args={[0.17, 0.2, 0.27, 20]} /><meshStandardMaterial color="#c9876c" roughness={0.82} /></mesh>
      </group>
    </group>
  )
}

function SceneDetails() {
  const points = useMemo(() => Array.from({ length: 19 }, (_, index) => {
    const angle = index * 2.399
    const radius = 1.45 + (index % 5) * 0.24
    return { position: [Math.cos(angle) * radius, Math.sin(angle * 1.4) * 1.35, -0.55 - (index % 3) * 0.18] as [number, number, number], scale: 0.018 + (index % 4) * 0.008, color: index % 3 === 0 ? '#f7a84b' : '#7de4c6' }
  }), [])

  return (
    <group>
      <mesh position={[0.1, 0.28, -1.15]} rotation={[0.45, 0, 0]}><torusGeometry args={[1.82, 0.006, 8, 120]} /><meshBasicMaterial color="#7de4c6" transparent opacity={0.24} /></mesh>
      <mesh position={[0.1, 0.28, -1.2]} rotation={[0.45, 0.28, 0]}><torusGeometry args={[2.12, 0.004, 8, 120]} /><meshBasicMaterial color="#f7a84b" transparent opacity={0.18} /></mesh>
      {points.map((point, index) => <mesh key={index} position={point.position} scale={point.scale}><sphereGeometry args={[1, 8, 8]} /><meshBasicMaterial color={point.color} transparent opacity={0.82} /></mesh>)}
    </group>
  )
}

export default function DeveloperScene() {
  return (
    <Canvas camera={{ position: [0, 0.12, 7.1], fov: 35 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }} onCreated={({ gl }) => gl.setClearColor('#07111e', 0)} aria-label="Interactive 3D illustration; move your pointer to change the character's gaze">
      <ambientLight intensity={2.1} />
      <directionalLight position={[3, 5, 6]} intensity={3.1} color="#ffe8cc" />
      <pointLight position={[-3, 1, 2]} intensity={34} color="#69d9c4" distance={8} />
      <pointLight position={[3, -2, 1]} intensity={20} color="#f2a653" distance={7} />
      <SceneDetails />
      <DeveloperCharacter />
    </Canvas>
  )
}