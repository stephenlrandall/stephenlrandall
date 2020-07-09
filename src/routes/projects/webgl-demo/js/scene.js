import * as THREE from "three";

export default function createScene(objects, canvas)
{
    if (!canvas)
        return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
    const material = new THREE.MeshPhongMaterial({ color: 0x0099ff });

    const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
    const cube = new THREE.Mesh(geometry, material);

    cube.position.x -= 2;
    scene.add(cube);

    const sphereGeometry = new THREE.SphereGeometry(0.65, 32, 32);
    const sphere = new THREE.Mesh(sphereGeometry, material);

    sphere.position.x += 2;
    scene.add(sphere);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-1, 1, 2);
    scene.add(directionalLight);

    camera.position.z = 4;

    const animate = function()
    {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y -= 0.01;

        renderer.render(scene, camera);
    };

    animate();
}