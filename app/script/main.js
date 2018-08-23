// if(window.innerWidth>767) {
//     const onRenderFcts = [];
//     const materials_particle = [];
//     const Group = [];
//     const MainPlane = [];
//
//
//     let viewportWidth = window.innerWidth;
//     let viewportHeight = window.innerHeight;
//     let aspectRatio = viewportWidth / viewportHeight;
//     let FOV = CalcFov(5, 15, aspectRatio);
//     const near = 1;
//     const CAMERA_DIST = 1000;
//
//     const webGlContiner = document.getElementById("webGl");
//
//     const renderer = new THREE.WebGLRenderer();
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(FOV, aspectRatio, near, CAMERA_DIST);
//
//     const raycaster = new THREE.Raycaster();
//     const projector = new THREE.Projector();
//     const mouse = new THREE.Vector2();
//     const mouseRay = new THREE.Vector2();
//
//
//     function CreatePlane(conf) {
//
//         // const conf = {
//         //     width: 35,
//         //     height: 35,
//         //     texture: './static/img/wall_bg.png',
//         //     material: 'MeshPhongMaterial',
//         //     transparent:true,
//         //     blending:'AdditiveBlending',
//         //     url: "http://google.com"
//         //     x: 1,
//         //     y: 1,
//         //     z: 1,
//         // };
//
//         const geometry = new THREE.PlaneBufferGeometry(conf.width, conf.height);
//         const TextureLoader = new THREE.TextureLoader();
//         const texture = TextureLoader.load(conf.texture);
//         texture.minFilter = THREE.LinearFilter;
//         texture.magFilter = THREE.LinearFilter;
//         const material = new THREE[conf.material]({
//             map: texture,
//             transparent: conf.transparent,
//             blending: THREE[conf.blending],
//             depthTest: false,
//             depthWrite: false
//         });
//         const mesh = new THREE.Mesh(geometry, material);
//         mesh.geometry.verticesNeedUpdate = true;
//         mesh.geometry.normalsNeedUpdate = true;
//         mesh.geometry.computeBoundingBox();
//         mesh.name = 'mesh';
//         mesh.position.set(conf.x, conf.y, conf.z);
//         conf.url ? mesh.userData = {URL: conf.url} : void(0);
//         conf.url ? Group.push(mesh) : void(0);
//         conf.main ? MainPlane.push(mesh) : void(0);
//
//         scene.add(mesh);
//     }
//
//     CreatePlane({
//         main: true,
//         width: 30,
//         height: 30,
//         texture: './static/img/wall_bg.png',
//         material: 'MeshPhongMaterial',
//         transparent: false,
//         blending: 'NormalBlending',
//         x: 0,
//         y: 0,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 15,
//         height: 8.43,
//         texture: './static/img/background.jpg',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         x: 0,
//         y: 0,
//         z: 0,
//     });
//     CreatePlane({
//         width: 15,
//         height: 8.43,
//         texture: './static/img/background.jpg',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         x: 0,
//         y: 8.43,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_work_disable.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: -5,
//         y: -1.2,
//         z: 0,
//     });
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_work_active.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "work.html",
//         x: -5,
//         y: -1.2,
//         z: 0,
//     });
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_work_active.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "work.html",
//         x: -5,
//         y: -1.2,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 8,
//         height: 6.8,
//         texture: './static/img/moon_light.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 4,
//         y: 0.8,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 2.5,
//         height: 2.5,
//         texture: './static/img/layer_moon_disable.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 5,
//         y: 2.2,
//         z: 0,
//     });
//     CreatePlane({
//         width: 2.5,
//         height: 2.5,
//         texture: './static/img/layer_moon_active.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "about.html",
//         x: 5,
//         y: 2.2,
//         z: 0,
//     });
//     CreatePlane({
//         width: 2.5,
//         height: 2.5,
//         texture: './static/img/layer_moon_active1.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "about.html",
//         x: 5,
//         y: 2.2,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_table_disable.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 5.2,
//         y: -2.3,
//         z: 0,
//     });
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_table_active.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "contacts.html",
//         x: 5.2,
//         y: -2.3,
//         z: 0,
//     });
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/layer_table_active.png',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "contacts.html",
//         x: 5.2,
//         y: -2.3,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 10,
//         height: 4.88,
//         texture: './static/img/layer_logo_overlay.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: -5.5,
//         y: 2.3,
//         z: 0,
//     });
//     CreatePlane({
//         width: 3,
//         height: 1.275,
//         texture: './static/img/logo_grey2.svg',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: -5.2,
//         y: 2.3,
//         z: 0,
//     });
//     CreatePlane({
//         width: 3,
//         height: 1.275,
//         texture: './static/img/logo_activ2.svg',
//         material: 'MeshPhongMaterial',
//         transparent: true,
//         blending: 'AdditiveBlending',
//         url: "/",
//         x: -5.2,
//         y: 2.3,
//         z: 0,
//     });
//
// //add particles
//     const geometry_particle = new THREE.BufferGeometry();
//     const vertices = [];
//     const textureLoader = new THREE.TextureLoader();
//     const sprites = [
//         textureLoader.load('static/img/download-0.png'),
//         textureLoader.load('static/img/download-1.png'),
//         textureLoader.load('static/img/download-2.png'),
//         textureLoader.load('static/img/download-3.png'),
//         textureLoader.load('static/img/download-4.png')
//     ];
//
//     for (let i = 0; i < 1000; i++) {
//         const x = Math.random() * 10 - 5;
//         const y = Math.random() * 10 - 5;
//         const z = Math.random() * 5 - 2.5;
//         vertices.push(x, y, z);
//     }
//     geometry_particle.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
//
//     for (let i = 0; i < sprites.length; i++) {
//         const sprite = sprites[i];
//
//         materials_particle[i] = new THREE.PointsMaterial({
//             size: 0.03,
//             map: sprite,
//             blending: THREE.AdditiveBlending,
//             depthTest: true,
//             depthWrite: false,
//             transparent: true
//         });
//
//         materials_particle[i].color.setHSL(1.0, 0.02, 0.2);
//
//         const particles = new THREE.Points(geometry_particle, materials_particle[i]);
//         particles.rotation.x = Math.random() * 5;
//         particles.rotation.y = Math.random() * 5;
//         scene.add(particles);
//
//     }
//
// // add spot light
//     const geometry_light = new THREE.CylinderGeometry(0.01, 1.5, 5, 32 * 2, 20, true);
//     geometry_light.applyMatrix(new THREE.Matrix4().makeTranslation(0, -geometry_light.parameters.height / 2, 0));
//     geometry_light.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
//     const material_light = new THREEx.VolumetricSpotLightMaterial();
//     const mesh_light = new THREE.Mesh(geometry_light, material_light);
//     mesh_light.position.set(0, -0.85, 3);
//     material_light.uniforms.lightColor.value.set('white');
//     material_light.uniforms.spotPosition.value = mesh_light.position;
//     scene.add(mesh_light);
//
//     new THREEx.addVolumetricSpotlightMaterial2DatGui(material_light);
//
//     CreatePlane({
//         width: 15,
//         height: 2.98,
//         texture: './static/img/grass.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 0,
//         y: -2.8,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 15,
//         height: 8.43,
//         texture: './static/img/background_black.jpg',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 0,
//         y: -8.43,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 5,
//         height: 5,
//         texture: './static/img/lighhouse_main.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 0,
//         y: -1.79,
//         z: 0,
//     });
//
//     CreatePlane({
//         width: 3,
//         height: 3,
//         texture: './static/img/light_sphere.png',
//         material: 'MeshBasicMaterial',
//         transparent: true,
//         blending: 'NormalBlending',
//         x: 0,
//         y: -1.7,
//         z: 1,
//     });
//
//     const spotLight = new THREE.SpotLight();
//     spotLight.position.set(0, -0.85, 9);
//     spotLight.distance = 100;
//     spotLight.color = mesh_light.material.uniforms.lightColor.value;
//     spotLight.exponent = 2;
//     spotLight.penumbra = 1;
//     spotLight.angle = Math.PI / 20;
//     spotLight.intensity = 1;
//     scene.add(spotLight);
//     scene.add(spotLight.target);
//     renderer.shadowMap.enabled = true;
//
//     onRenderFcts.push(function (x, y) {
//         let target = new THREE.Vector3(x, y, 0);
//
//         mesh_light.lookAt(target);
//         spotLight.target.position.copy(target);
//
//     });
//
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     webGlContiner.appendChild(renderer.domElement);
//     renderer.setClearColor('black', 0);
//     renderer.sortObjects = false;
//     camera.position.set(0, 0, 5);
//
//
//     function CalcFov(dist, width, aspect) {
//         return 2 * Math.atan((width / aspect) / (2 * dist)) * (180 / Math.PI);
//     }
//
//     function CoordinateToBgDetector(x, y) {
//         let mv = new THREE.Vector3(x, y, 0.5);
//         raycaster.setFromCamera(mv, camera);
//
//         let pos = raycaster.intersectObjects(MainPlane, true);
//
//         mouseRay.x = pos[0].point.x;
//         mouseRay.y = pos[0].point.y;
//     }
//
//     window.addEventListener('resize', onWindowResize, false);
//
//     function onWindowResize() {
//         const aspectRatio = window.innerWidth / window.innerHeight;
//         camera.aspect = aspectRatio;
//         camera.fov = CalcFov(5, 15, aspectRatio);
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight)
//     }
//
//     document.addEventListener('mousemove', onMouseMove, false);
//
//     function onMouseMove(event) {
//         event.preventDefault();
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//         CoordinateToBgDetector(mouse.x, mouse.y);
//     }
//
//     document.addEventListener('mousedown', onDocumentMouseDown, false);
//
//     function onDocumentMouseDown(event) {
//         event.preventDefault();
//         raycaster.setFromCamera(mouse, camera);
//         const intersects = raycaster.intersectObjects(Group, true);
//         if (intersects.length > 0) {
//             window.location = intersects[0].object.userData.URL;
//         }
//     }
//
//     document.addEventListener("touchmove", handleMove, false);
//
//     function handleMove(event) {
//         mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
//         CoordinateToBgDetector(mouse.x, mouse.y)
//     }
//
//     onRenderFcts.push(function () {
//         renderer.render(scene, camera);
//     });
//
//     requestAnimationFrame(function animate() {
//         requestAnimationFrame(animate);
//         const time = Date.now() * 0.000001;
//
//         for (let i = 0; i < scene.children.length; i++) {
//             const object = scene.children[i];
//             if (object instanceof THREE.Points) {
//                 object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
//             }
//         }
//         onRenderFcts.forEach(function (onRenderFct) {
//             onRenderFct(mouseRay.x, mouseRay.y);
//         })
//     });
// }


'use strict';

if (window.innerWidth > 767) {
    var CreatePlane = function CreatePlane(conf) {

        // const conf = {
        //     width: 35,
        //     height: 35,
        //     texture: './static/img/wall_bg.png',
        //     material: 'MeshPhongMaterial',
        //     transparent:true,
        //     blending:'AdditiveBlending',
        //     url: "http://google.com"
        //     x: 1,
        //     y: 1,
        //     z: 1,
        // };

        var geometry = new THREE.PlaneBufferGeometry(conf.width, conf.height);
        var TextureLoader = new THREE.TextureLoader();
        var texture = TextureLoader.load(conf.texture);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        var material = new THREE[conf.material]({
            map: texture,
            transparent: conf.transparent,
            blending: THREE[conf.blending],
            depthTest: false,
            depthWrite: false
        });
        var mesh = new THREE.Mesh(geometry, material);
        mesh.geometry.verticesNeedUpdate = true;
        mesh.geometry.normalsNeedUpdate = true;
        mesh.geometry.computeBoundingBox();
        mesh.name = 'mesh';
        mesh.position.set(conf.x, conf.y, conf.z);
        conf.url ? mesh.userData = {URL: conf.url} : void 0;
        conf.url ? Group.push(mesh) : void 0;
        conf.main ? MainPlane.push(mesh) : void 0;

        scene.add(mesh);
    };

    var CalcFov = function CalcFov(dist, width, aspect) {
        return 2 * Math.atan(width / aspect / (2 * dist)) * (180 / Math.PI);
    };

    var CoordinateToBgDetector = function CoordinateToBgDetector(x, y) {
        var mv = new THREE.Vector3(x, y, 0.5);
        raycaster.setFromCamera(mv, camera);

        var pos = raycaster.intersectObjects(MainPlane, true);

        mouseRay.x = pos[0].point.x;
        mouseRay.y = pos[0].point.y;
    };

    var onWindowResize = function onWindowResize() {
        var aspectRatio = window.innerWidth / window.innerHeight;
        camera.aspect = aspectRatio;
        camera.fov = CalcFov(5, 15, aspectRatio);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    var onMouseMove = function onMouseMove(event) {
        event.preventDefault();
        mouse.x = event.clientX / window.innerWidth * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        CoordinateToBgDetector(mouse.x, mouse.y);
    };

    var onDocumentMouseDown = function onDocumentMouseDown(event) {
        event.preventDefault();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(Group, true);
        if (intersects.length > 0) {
            window.location = intersects[0].object.userData.URL;
        }
    };

    var handleMove = function handleMove(event) {
        mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
        CoordinateToBgDetector(mouse.x, mouse.y);
    };

    var onRenderFcts = [];
    var materials_particle = [];
    var Group = [];
    var MainPlane = [];

    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
    var aspectRatio = viewportWidth / viewportHeight;
    var FOV = CalcFov(5, 15, aspectRatio);
    var near = 1;
    var CAMERA_DIST = 1000;

    var webGlContiner = document.getElementById("webGl");

    var renderer = new THREE.WebGLRenderer();
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(FOV, aspectRatio, near, CAMERA_DIST);

    var raycaster = new THREE.Raycaster();
    var projector = new THREE.Projector();
    var mouse = new THREE.Vector2();
    var mouseRay = new THREE.Vector2();

    CreatePlane({
        main: true,
        width: 30,
        height: 30,
        texture: './static/img/wall_bg.png',
        material: 'MeshPhongMaterial',
        transparent: false,
        blending: 'NormalBlending',
        x: 0,
        y: 0,
        z: 0
    });

    CreatePlane({
        width: 15,
        height: 8.43,
        texture: './static/img/background.jpg',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        x: 0,
        y: 0,
        z: 0
    });
    CreatePlane({
        width: 15,
        height: 8.43,
        texture: './static/img/background.jpg',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        x: 0,
        y: 8.43,
        z: 0
    });

    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_work_disable.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: -5,
        y: -1.2,
        z: 0
    });
    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_work_active.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "work.html",
        x: -5,
        y: -1.2,
        z: 0
    });
    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_work_active.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "work.html",
        x: -5,
        y: -1.2,
        z: 0
    });

    CreatePlane({
        width: 8,
        height: 6.8,
        texture: './static/img/moon_light.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 4,
        y: 0.8,
        z: 0
    });

    CreatePlane({
        width: 2.5,
        height: 2.5,
        texture: './static/img/layer_moon_disable.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 5,
        y: 2.2,
        z: 0
    });
    CreatePlane({
        width: 2.5,
        height: 2.5,
        texture: './static/img/layer_moon_active.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "about.html",
        x: 5,
        y: 2.2,
        z: 0
    });
    CreatePlane({
        width: 2.5,
        height: 2.5,
        texture: './static/img/layer_moon_active1.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "about.html",
        x: 5,
        y: 2.2,
        z: 0
    });

    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_table_disable.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 5.2,
        y: -2.3,
        z: 0
    });
    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_table_active.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "contacts.html",
        x: 5.2,
        y: -2.3,
        z: 0
    });
    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/layer_table_active.png',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "contacts.html",
        x: 5.2,
        y: -2.3,
        z: 0
    });

    CreatePlane({
        width: 10,
        height: 4.88,
        texture: './static/img/layer_logo_overlay.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: -5.5,
        y: 2.3,
        z: 0
    });
    CreatePlane({
        width: 3,
        height: 1.275,
        texture: './static/img/logo_grey2.svg',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: -5.2,
        y: 2.3,
        z: 0
    });
    CreatePlane({
        width: 3,
        height: 1.275,
        texture: './static/img/logo_activ2.svg',
        material: 'MeshPhongMaterial',
        transparent: true,
        blending: 'AdditiveBlending',
        url: "/",
        x: -5.2,
        y: 2.3,
        z: 0
    });

    //add particles
    var geometry_particle = new THREE.BufferGeometry();
    var vertices = [];
    var textureLoader = new THREE.TextureLoader();
    var sprites = [textureLoader.load('static/img/download-0.png'), textureLoader.load('static/img/download-1.png'), textureLoader.load('static/img/download-2.png'), textureLoader.load('static/img/download-3.png'), textureLoader.load('static/img/download-4.png')];

    for (var i = 0; i < 1000; i++) {
        var x = Math.random() * 10 - 5;
        var y = Math.random() * 10 - 5;
        var z = Math.random() * 5 - 2.5;
        vertices.push(x, y, z);
    }
    geometry_particle.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    for (var _i = 0; _i < sprites.length; _i++) {
        var sprite = sprites[_i];

        materials_particle[_i] = new THREE.PointsMaterial({
            size: 0.03,
            map: sprite,
            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: false,
            transparent: true
        });

        materials_particle[_i].color.setHSL(1.0, 0.02, 0.2);

        var particles = new THREE.Points(geometry_particle, materials_particle[_i]);
        particles.rotation.x = Math.random() * 5;
        particles.rotation.y = Math.random() * 5;
        scene.add(particles);
    }

    // add spot light
    var geometry_light = new THREE.CylinderGeometry(0.01, 1.5, 5, 32 * 2, 20, true);
    geometry_light.applyMatrix(new THREE.Matrix4().makeTranslation(0, -geometry_light.parameters.height / 2, 0));
    geometry_light.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    var material_light = new THREEx.VolumetricSpotLightMaterial();
    var mesh_light = new THREE.Mesh(geometry_light, material_light);
    mesh_light.position.set(0, -0.85, 3);
    material_light.uniforms.lightColor.value.set('white');
    material_light.uniforms.spotPosition.value = mesh_light.position;
    scene.add(mesh_light);

    new THREEx.addVolumetricSpotlightMaterial2DatGui(material_light);

    CreatePlane({
        width: 15,
        height: 2.98,
        texture: './static/img/grass.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 0,
        y: -2.8,
        z: 0
    });

    CreatePlane({
        width: 15,
        height: 8.43,
        texture: './static/img/background_black.jpg',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 0,
        y: -8.43,
        z: 0
    });

    CreatePlane({
        width: 5,
        height: 5,
        texture: './static/img/lighhouse_main.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 0,
        y: -1.79,
        z: 0
    });

    CreatePlane({
        width: 3,
        height: 3,
        texture: './static/img/light_sphere.png',
        material: 'MeshBasicMaterial',
        transparent: true,
        blending: 'NormalBlending',
        x: 0,
        y: -1.7,
        z: 1
    });

    var spotLight = new THREE.SpotLight();
    spotLight.position.set(0, -0.85, 9);
    spotLight.distance = 100;
    spotLight.color = mesh_light.material.uniforms.lightColor.value;
    spotLight.exponent = 2;
    spotLight.penumbra = 1;
    spotLight.angle = Math.PI / 20;
    spotLight.intensity = 1;
    scene.add(spotLight);
    scene.add(spotLight.target);
    renderer.shadowMap.enabled = true;

    onRenderFcts.push(function (x, y) {
        var target = new THREE.Vector3(x, y, 0);

        mesh_light.lookAt(target);
        spotLight.target.position.copy(target);
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    webGlContiner.appendChild(renderer.domElement);
    renderer.setClearColor('black', 0);
    renderer.sortObjects = false;
    camera.position.set(0, 0, 5);

    window.addEventListener('resize', onWindowResize, false);

    document.addEventListener('mousemove', onMouseMove, false);

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    document.addEventListener("touchmove", handleMove, false);

    onRenderFcts.push(function () {
        renderer.render(scene, camera);
    });

    requestAnimationFrame(function animate() {
        requestAnimationFrame(animate);
        var time = Date.now() * 0.000001;

        for (var _i2 = 0; _i2 < scene.children.length; _i2++) {
            var object = scene.children[_i2];
            if (object instanceof THREE.Points) {
                object.rotation.y = time * (_i2 < 4 ? _i2 + 1 : -(_i2 + 1));
            }
        }
        onRenderFcts.forEach(function (onRenderFct) {
            onRenderFct(mouseRay.x, mouseRay.y);
        });
    });
}