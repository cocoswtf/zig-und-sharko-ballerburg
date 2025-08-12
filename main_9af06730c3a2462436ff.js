(function(modules) {

    // save already loaded modules
    var moduleCache = {};

    // status of loaded chunks (0 = ready)
    var chunkStatus = { 0: 0 };

    // queue for modules that are not ready yet
    var executionQueue = [];

    /**
     * load new chunnks/modules, insert them into the module array and start their execution if possible
     */
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var newModules = data[1];
        var executeModules = data[2];

        var moduleId, resolves = [];

        // mark chunks as loaded
        for (var i = 0; i < chunkIds.length; i++) {
            moduleId = chunkIds[i];
            if (chunkStatus[moduleId]) {
                resolves.push(chunkStatus[moduleId][0]);
            }
            chunkStatus[moduleId] = 0;
        }

        // add new modules to the module cache
        for (var moduleName in newModules) {
            if (Object.prototype.hasOwnProperty.call(newModules, moduleName)) {
                modules[moduleName] = newModules[moduleName];
            }
        }

        // if there was an old push function, call it
        if (oldJsonpFunction) oldJsonpFunction(data);

        // execute all stored resolve functions
        while (resolves.length) {
            resolves.shift()();
        }

        // new execution queue
        executionQueue.push.apply(executionQueue, executeModules || []);

        return checkModulesReady();
    }

    /**
     * checks if modules in the execution queue are ready to be executed and executes them
     */
    function checkModulesReady() {
        var result;
        for (var i = 0; i < executionQueue.length; i++) {
            var queueItem = executionQueue[i];
            var allDepsLoaded = true;

            for (var j = 1; j < queueItem.length; j++) {
                var depId = queueItem[j];
                if (chunkStatus[depId] !== 0) {
                    allDepsLoaded = false;
                }
            }

            if (allDepsLoaded) {
                executionQueue.splice(i--, 1);
                result = requireModule(requireModule.s = queueItem[0]);
            }
        }
        return result;
    }

    /**
     * the Webpack-require
     */
    function requireModule(moduleId) {
        // get from chache if already loaded
        if (moduleCache[moduleId]) {
            return moduleCache[moduleId].exports;
        }

        // new module object and save it in the cache
        var module = moduleCache[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // run mudule code
        modules[moduleId].call(module.exports, module, module.exports, requireModule);

        module.l = true; // mark as loaded
        return module.exports;
    }

    // additional things
    requireModule.m = modules;
    requireModule.c = moduleCache;
    requireModule.d = function(exports, name, getter) {
        if (!requireModule.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    requireModule.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };
    requireModule.t = function(value, mode) {
        if (mode & 1) value = requireModule(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        requireModule.r(ns);
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        if (mode & 2 && typeof value != 'string') {
            for (var key in value) {
                requireModule.d(ns, key, function(k) { return value[k]; }.bind(null, key));
            }
        }
        return ns;
    };
    requireModule.n = function(module) {
        var getter = module && module.__esModule ?
            function() { return module.default; } :
            function() { return module; };
        requireModule.d(getter, 'a', getter);
        return getter;
    };
    requireModule.o = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    requireModule.p = "";

    // Webpack JSONP init
    var jsonpArray = window.webpackJsonp = window.webpackJsonp || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) {
        webpackJsonpCallback(jsonpArray[i]);
    }

    var checkOld = oldJsonpFunction;

    // Entry Point
    executionQueue.push([164, 1, 2, 3]);
    checkModulesReady();

})

([, , function(e, t, i) {
    i.r(t);
    i.d(t, "weaponSelectionConfig", function () { return weaponSelectionConfig; });

    var a, n, o;
    var s = i(4); // haas s.config.weaponType and co

    // help function to set properties on an object
    function setProp(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    var weaponSelectionConfig = {};

    // define all available tiers and their weapons
    weaponSelectionConfig.TIERS = {
        TIER_0: {
            key: "TIER_0",
            weapons: [
                s.config.weaponType.SLING,
                s.config.weaponType.BANANA_BOMB,
                s.config.weaponType.BEACH_BALL
            ]
        },
        TIER_1: {
            key: "TIER_1",
            weapons: [
                s.config.weaponType.DUCKLING,
                s.config.weaponType.BOOMERANG,
                s.config.weaponType.CATAPULT,
                s.config.weaponType.WATER_BOMB
            ]
        },
        TIER_2: {
            key: "TIER_2",
            weapons: [
                s.config.weaponType.HARPOON,
                s.config.weaponType.ICE_CREAM,
                s.config.weaponType.CANON,
                s.config.weaponType.SUNSCREEN
            ]
        },
        TIER_3: {
            key: "TIER_3",
            weapons: [
                s.config.weaponType.GOLDEN_TURRET
            ]
        }
    };

    // mapping of weapon types to tiers
    weaponSelectionConfig.TIER_OF_WEAPON = (
        setProp(a = {}, s.config.weaponType.SLING, weaponSelectionConfig.TIERS.TIER_0.key),
        setProp(a, s.config.weaponType.BANANA_BOMB, weaponSelectionConfig.TIERS.TIER_0.key),
        setProp(a, s.config.weaponType.BEACH_BALL, weaponSelectionConfig.TIERS.TIER_0.key),

        setProp(a, s.config.weaponType.DUCKLING, weaponSelectionConfig.TIERS.TIER_1.key),
        setProp(a, s.config.weaponType.BOOMERANG, weaponSelectionConfig.TIERS.TIER_1.key),
        setProp(a, s.config.weaponType.CATAPULT, weaponSelectionConfig.TIERS.TIER_1.key),
        setProp(a, s.config.weaponType.WATER_BOMB, weaponSelectionConfig.TIERS.TIER_1.key),

        setProp(a, s.config.weaponType.HARPOON, weaponSelectionConfig.TIERS.TIER_2.key),
        setProp(a, s.config.weaponType.ICE_CREAM, weaponSelectionConfig.TIERS.TIER_2.key),
        setProp(a, s.config.weaponType.CANON, weaponSelectionConfig.TIERS.TIER_2.key),
        setProp(a, s.config.weaponType.SUNSCREEN, weaponSelectionConfig.TIERS.TIER_2.key),

        setProp(a, s.config.weaponType.GOLDEN_TURRET, weaponSelectionConfig.TIERS.TIER_3.key),
        a
    );

    // weapon costs
    weaponSelectionConfig.TIER_COSTS = (
        setProp(n = {}, weaponSelectionConfig.TIERS.TIER_0.key, 100),
        setProp(n, weaponSelectionConfig.TIERS.TIER_1.key, 200),
        setProp(n, weaponSelectionConfig.TIERS.TIER_2.key, 300),
        setProp(n, weaponSelectionConfig.TIERS.TIER_3.key, 400),
        n
    );

    // money rewards for each tier
    weaponSelectionConfig.TIER_REWARD = (
        setProp(o = {}, weaponSelectionConfig.TIERS.TIER_0.key, {
            average: 200, delta: 150, min: 50, max: 350
        }),
        setProp(o, weaponSelectionConfig.TIERS.TIER_1.key, {
            average: 100, delta: 150, min: 50, max: 350
        }),
        setProp(o, weaponSelectionConfig.TIERS.TIER_2.key, {
            average: 50, delta: 150, min: 50, max: 350
        }),
        setProp(o, weaponSelectionConfig.TIERS.TIER_3.key, {
            average: 0, delta: 100, min: 0, max: 350
        }),
        o
    );

    // hidden money system to determine weapon tier
    weaponSelectionConfig.ROUND_MONEY = [50, 100, 150, 200, 250];

    // starting money for the player
    weaponSelectionConfig.STARTING_MONEY = [
        { amount: 100, possibility: 0.65 },
        { amount: 200, possibility: 0.30 },
        { amount: 350, possibility: 0.05 }
    ];

    // some debug
    // forces the weapon for test purposes when debug mode is enabled
    weaponSelectionConfig.debugWeapon = null;
}, , 
function(e, t, i) {
    var a, n, o;

    function s(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    i.r(t), i.d(t, "config", (function() {
        return r
    }));

    // some variables for the game config
    var r = {
        toggoAdInterval: 180,
        centerLandWidthMin: 600,
        centerLandWidthMax: 800,
        centerLandHeight: 1024,
        playerLandWidthMin: 700,
        playerLandWidthMax: 700,
        playerLandHeight: 512,
        landPaddingMin: 50,
        landPaddingMax: 100,
        worldHeight: 1300,
        aimLength: 150,
        windProjectileFactor: 1,
        projectileType: {
            STAR: "STAR",
            FISH: "FISH",
            HARPOON: "HARPOON",
            BLOW_FISH: "BLOW_FISH",
            DUCKLING: "DUCKLING",
            SUNSCREEN: "SUNSCREEN",
            SUNSCREEN_DROPLET: "SUNSCREEN_DROPLET",
            ICE_CREAM: "ICE_CREAM",
            GOLDEN_TURRET: "GOLDEN_TURRET",
            BANANA_BOMB: "BANANA_BOMB",
            WATER_BOMB: "WATER_BOMB",
            WATER_DROPLET: "WATER_DROPLET",
            BEACH_BALL: "BEACH_BALL",
            BOOMERANG: "BOOMERANG"
        }
    };

    r.projectile = (s(a = {}, r.projectileType.STAR, {
        projectileRadius: 40,
        explosionRadius: 40,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 1,
        aimingForceFactor: 1,
        img: "projectiles/rock",
        reward: {
            middle: 50,
            enemyLand: 90,
            enemyCastle: 120
        }
    }), s(a, r.projectileType.FISH, {
        projectileRadius: 50,
        explosionRadius: 80,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 2,
        aimingForceFactor: 1.3,
        img: "projectiles/bigRock",
        reward: {
            middle: 35,
            enemyLand: 70,
            enemyCastle: 100
        }
    }), s(a, r.projectileType.HARPOON, {
        projectileRadius: 40,
        explosionRadius: 40,
        gravity: 500,
        rotate: !1,
        windInfluenceFactor: 1,
        aimingForceFactor: 1.3,
        img: "projectiles/harpoon",
        reward: {
            middle: 35,
            enemyLand: 70,
            enemyCastle: 100
        }
    }), s(a, r.projectileType.BLOW_FISH, {
        projectileRadius: 50,
        explosionRadius: 120,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 1,
        aimingForceFactor: 1.75,
        img: "projectiles/canonball",
        reward: {
            middle: 35,
            enemyLand: 70,
            enemyCastle: 100
        }
    }), s(a, r.projectileType.DUCKLING, {
        projectileRadius: 50,
        explosionRadius: 32,
        gravity: 500,
        rotate: !1,
        windInfluenceFactor: 2,
        aimingForceFactor: .9,
        img: "projectiles/projectile_05",
        reward: {
            middle: 15,
            enemyLand: 30,
            enemyCastle: 40
        }
    }), s(a, r.projectileType.SUNSCREEN, {
        projectileRadius: 50,
        explosionRadius: 90,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 1,
        aimingForceFactor: 1.3,
        explodeSfx: "explosion_sunscreenbomb",
        img: "projectiles/projectile_06",
        reward: {
            middle: 15,
            enemyLand: 40,
            enemyCastle: 70
        }
    }), s(a, r.projectileType.SUNSCREEN_DROPLET, {
        projectileRadius: 50,
        explosionRadius: 40,
        gravity: 500,
        rotate: !1,
        windInfluenceFactor: 1,
        aimingForceFactor: 1.3,
        verticalMomentum: {
            min: 0,
            max: 200
        },
        horizontalMomentum: {
            min: 0,
            max: 180
        },
        parentProjectile: r.projectileType.SUNSCREEN,
        fireSound: "fire_slingshot",
        img: "projectiles/particle_06_01",
        images: ["projectiles/particle_06_01", "projectiles/particle_06_02", "projectiles/particle_06_03"],
        reward: {
            middle: 5,
            enemyLand: 8,
            enemyCastle: 14
        }
    }), s(a, r.projectileType.ICE_CREAM, {
        projectileRadius: 50,
        explosionRadius: 35,
        gravity: 500,
        windInfluenceFactor: 1,
        rotate: !0,
        aimingForceFactor: 2,
        img: "projectiles/projectile_07_01",
        images: ["projectiles/projectile_07_01", "projectiles/projectile_07_02", "projectiles/projectile_07_03", "projectiles/projectile_07_04", "projectiles/projectile_07_05", "projectiles/projectile_07_06", "projectiles/projectile_07_07"],
        reward: {
            middle: 3,
            enemyLand: 8,
            enemyCastle: 14
        }
    }), s(a, r.projectileType.GOLDEN_TURRET, {
        projectileRadius: 50,
        explosionRadius: 90,
        gravity: 500,
        windInfluenceFactor: 0,
        rotate: !0,
        aimingForceFactor: 2,
        minTime: .7,
        reactivationTime: 1.3,
        followSpeed: 1300,
        img: "projectiles/projectile_08_03",
        images: ["projectiles/projectile_08_01", "projectiles/projectile_08_02", "projectiles/projectile_08_03"],
        specialSfx: "aim_goldenTurret",
        reward: {
            middle: 15,
            enemyLand: 40,
            enemyCastle: 70
        }
    }), s(a, r.projectileType.BANANA_BOMB, {
        projectileRadius: 50,
        explosionRadius: 55,
        gravity: 500,
        windInfluenceFactor: .5,
        rotate: !0,
        aimingForceFactor: 1.5,
        img: "projectiles/projectile_09",
        reward: {
            middle: 50,
            enemyLand: 90,
            enemyCastle: 120
        }
    }), s(a, r.projectileType.WATER_BOMB, {
        projectileRadius: 50,
        explosionRadius: 50,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: .8,
        aimingForceFactor: 1.2,
        explodeSfx: "explosion_waterbomb",
        img: "projectiles/projectile_10_01",
        images: ["projectiles/projectile_10_01", "projectiles/projectile_10_02", "projectiles/projectile_10_03", "projectiles/projectile_10_04"],
        reward: {
            middle: 15,
            enemyLand: 40,
            enemyCastle: 70
        }
    }), s(a, r.projectileType.WATER_DROPLET, {
        projectileRadius: 50,
        explosionRadius: 30,
        gravity: 500,
        rotate: !1,
        windInfluenceFactor: 0,
        aimingForceFactor: 1.3,
        verticalMomentum: 400,
        horizontalMomentum: {
            min: 0,
            max: 130
        },
        parentProjectile: r.projectileType.WATER_BOMB,
        fireSound: "fire_slingshot",
        img: "projectiles/particle_10_01",
        images: ["projectiles/particle_10_01", "projectiles/particle_10_02", "projectiles/particle_10_03"],
        reward: {
            middle: 5,
            enemyLand: 13,
            enemyCastle: 23
        }
    }), s(a, r.projectileType.BEACH_BALL, {
        projectileRadius: 50,
        explosionRadius: 55,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 2,
        aimingForceFactor: 1.3,
        img: "projectiles/projectile_11",
        reward: {
            middle: 50,
            enemyLand: 90,
            enemyCastle: 120
        }
    }), s(a, r.projectileType.BOOMERANG, {
        projectileRadius: 50,
        explosionRadius: 80,
        gravity: 500,
        rotate: !0,
        windInfluenceFactor: 2,
        aimingForceFactor: 2,
        minTime: 1.25,
        angularSpeed: 5,
        collisionReturnRange: 13,
        img: "projectiles/projectile_12",
        reward: {
            middle: 35,
            enemyLand: 70,
            enemyCastle: 100
        }
    }), a), r.weaponType = {
        SLING: "SLING",
        CATAPULT: "CATAPULT",
        HARPOON: "HARPOON",
        CANON: "CANON",
        DUCKLING: "DUCKLING",
        SUNSCREEN: "SUNSCREEN",
        ICE_CREAM: "ICE_CREAM",
        GOLDEN_TURRET: "GOLDEN_TURRET",
        BANANA_BOMB: "BANANA_BOMB",
        WATER_BOMB: "WATER_BOMB",
        BEACH_BALL: "BEACH_BALL",
        BOOMERANG: "BOOMERANG"
    }, r.weaponOfProjectile = (s(n = {}, r.projectileType.STAR, r.weaponType.SLING), s(n, r.projectileType.FISH, r.weaponType.CATAPULT), s(n, r.projectileType.HARPOON, r.weaponType.HARPOON), s(n, r.projectileType.BLOW_FISH, r.weaponType.CANON), s(n, r.projectileType.DUCKLING, r.weaponType.DUCKLING), s(n, r.projectileType.SUNSCREEN, r.weaponType.SUNSCREEN), s(n, r.projectileType.ICE_CREAM, r.weaponType.ICE_CREAM), s(n, r.projectileType.GOLDEN_TURRET, r.weaponType.GOLDEN_TURRET), s(n, r.projectileType.BANANA_BOMB, r.weaponType.BANANA_BOMB), s(n, r.projectileType.WATER_BOMB, r.weaponType.WATER_BOMB), s(n, r.projectileType.BEACH_BALL, r.weaponType.BEACH_BALL), s(n, r.projectileType.BOOMERANG, r.weaponType.BOOMERANG), n), r.weapon = (s(o = {}, r.weaponType.SLING, {
        key: r.weaponType.SLING,
        img: "weapons/slingshot",
        base: "weapons/slingshotStick",
        aim: "weapons/slingshotSling",
        aimAnchor: {
            x: .9,
            y: .5
        },
        imgUnlock: "upgrade1",
        desc: "",
        power: 800,
        projectile: r.projectileType.STAR,
        chargeOffset: {
            x: 34,
            y: 16
        },
        rootOffset: {
            x: -10,
            y: 10
        },
        cost: 0,
        fireSound: "fire_slingshot",
        chargeAnchorOffset: {
            x: 10,
            y: 10
        },
        trackKey: "schleuder"
    }), s(o, r.weaponType.CATAPULT, {
        key: r.weaponType.CATAPULT,
        img: "weapons/catapult",
        base: "weapons/catapultStructure",
        aim: "weapons/catapultArm",
        aimAnchor: {
            x: .6,
            y: .5
        },
        imgUnlock: "upgrade2",
        desc: "",
        power: 900,
        projectile: r.projectileType.FISH,
        chargeOffset: {
            x: 77,
            y: 70
        },
        rootOffset: {
            x: -10,
            y: 15
        },
        cost: 30,
        fireSound: "fire_catapult",
        chargeAnchorOffset: {
            x: 25,
            y: 25
        },
        trackKey: "katapult"
    }), s(o, r.weaponType.HARPOON, {
        key: r.weaponType.HARPOON,
        img: "weapons/harpoon",
        base: "weapons/harpoonStructure",
        aim: "weapons/harpoonLauncher",
        aimAnchor: {
            x: .5,
            y: .5
        },
        imgUnlock: "upgrade3",
        desc: "",
        power: 1200,
        projectile: r.projectileType.HARPOON,
        chargeOffset: {
            x: 49,
            y: 39
        },
        rootOffset: {
            x: -5,
            y: 10
        },
        cost: 90,
        fireSound: "fire_harpoon",
        chargeAnchorOffset: {
            x: 45,
            y: 45
        },
        trackKey: "harpune"
    }), s(o, r.weaponType.CANON, {
        key: r.weaponType.CANON,
        img: "weapons/canon",
        imgUnlock: "upgrade4",
        base: "weapons/canonBase",
        aim: "weapons/canonHead",
        aimAnchor: {
            x: .32,
            y: .5
        },
        desc: "",
        power: 1e3,
        projectile: r.projectileType.BLOW_FISH,
        chargeOffset: {
            x: 52,
            y: 49
        },
        rootOffset: {
            x: -5,
            y: 15
        },
        cost: 150,
        fireSound: "fire_cannon",
        chargeAnchorOffset: {
            x: 65,
            y: 65
        },
        trackKey: "kanone"
    }), s(o, r.weaponType.DUCKLING, {
        key: r.weaponType.DUCKLING,
        img: "weapons/weapon_05",
        imgUnlock: "upgrade4",
        base: "weapons/weaponBase_05",
        aim: "weapons/weaponHead_05",
        aimAnchor: {
            x: .29,
            y: .6
        },
        desc: "",
        power: 800,
        projectile: r.projectileType.DUCKLING,
        chargeOffset: {
            x: 39,
            y: 60
        },
        rootOffset: {
            x: -5,
            y: 13
        },
        cost: 150,
        fireSound: "fire_ducklingcannon",
        chargeAnchorOffset: {
            x: 75,
            y: 80
        },
        trackKey: "ente",
        delayBetweenShots: .1,
        numberOfProjectiles: 3
    }), s(o, r.weaponType.SUNSCREEN, {
        key: r.weaponType.SUNSCREEN,
        img: "weapons/weapon_06",
        base: "weapons/weaponBase_06",
        aim: "weapons/weaponHead_06",
        aimAnchor: {
            x: .6,
            y: .5
        },
        imgUnlock: "upgrade2",
        desc: "",
        power: 900,
        projectile: r.projectileType.SUNSCREEN,
        chargeOffset: {
            x: 77,
            y: 70
        },
        rootOffset: {
            x: -10,
            y: 15
        },
        cost: 30,
        fireSound: "fire_sunscreenbomb",
        chargeAnchorOffset: {
            x: 25,
            y: 25
        },
        trackKey: "sonnencreme",
        numberOfProjectiles: 5,
        minTime: 1
    }), s(o, r.weaponType.ICE_CREAM, {
        key: r.weaponType.ICE_CREAM,
        img: "weapons/weapon_07",
        base: "weapons/weaponBase_07",
        aim: "weapons/weaponHead_07",
        imgUnlock: "upgrade4",
        aimAnchor: {
            x: .29,
            y: .6
        },
        desc: "",
        power: 1e3,
        projectile: r.projectileType.ICE_CREAM,
        chargeOffset: {
            x: 39,
            y: 60
        },
        rootOffset: {
            x: -5,
            y: 13
        },
        cost: 150,
        fireSound: "fire_icecreamcannon",
        chargeAnchorOffset: {
            x: 70,
            y: 90
        },
        trackKey: "eis",
        numberOfProjectiles: 5,
        angleBetweenProjectiles: 4
    }), s(o, r.weaponType.GOLDEN_TURRET, {
        key: r.weaponType.GOLDEN_TURRET,
        img: "weapons/weapon_08",
        base: "weapons/weaponBase_08",
        aim: "weapons/weaponHead_08",
        aimAnchor: {
            x: .4,
            y: .6
        },
        desc: "",
        power: 1e3,
        projectile: r.projectileType.GOLDEN_TURRET,
        chargeOffset: {
            x: 50,
            y: 50
        },
        rootOffset: {
            x: -5,
            y: 15
        },
        cost: 150,
        fireSound: "fire_goldenturret",
        chargeAnchorOffset: {
            x: 65,
            y: 85
        },
        trackKey: "goldturm",
        numberOfProjectiles: 5,
        angleBetweenProjectiles: 4
    }), s(o, r.weaponType.BANANA_BOMB, {
        key: r.weaponType.BANANA_BOMB,
        img: "weapons/weapon_09",
        base: "weapons/weaponBase_09",
        aim: "weapons/weaponHead_09",
        aimAnchor: {
            x: .32,
            y: .5
        },
        desc: "",
        power: 1e3,
        projectile: r.projectileType.BANANA_BOMB,
        chargeOffset: {
            x: 40,
            y: 54
        },
        rootOffset: {
            x: -5,
            y: 15
        },
        cost: 150,
        fireSound: "fire_bananabomb",
        chargeAnchorOffset: {
            x: 75,
            y: 75
        },
        trackKey: "banana"
    }), s(o, r.weaponType.WATER_BOMB, {
        key: r.weaponType.WATER_BOMB,
        img: "weapons/weapon_10",
        base: "weapons/weaponBase_10",
        aim: "weapons/weaponHead_10",
        aimAnchor: {
            x: .4,
            y: .58
        },
        imgUnlock: "upgrade2",
        desc: "",
        power: 800,
        projectile: r.projectileType.WATER_BOMB,
        chargeOffset: {
            x: 47,
            y: 30
        },
        rootOffset: {
            x: 0,
            y: 15
        },
        cost: 30,
        fireSound: "fire_waterbomb",
        chargeAnchorOffset: {
            x: 45,
            y: 50
        },
        trackKey: "wasserballon",
        numberOfProjectiles: 3
    }), s(o, r.weaponType.BEACH_BALL, {
        key: r.weaponType.BEACH_BALL,
        img: "weapons/weapon_11",
        base: "weapons/weaponBase_11",
        aim: "weapons/weaponHead_11",
        aimAnchor: {
            x: .9,
            y: .5
        },
        imgUnlock: "upgrade2",
        desc: "",
        power: 800,
        projectile: r.projectileType.BEACH_BALL,
        chargeOffset: {
            x: 70,
            y: 30
        },
        rootOffset: {
            x: -10,
            y: 13
        },
        cost: 0,
        fireSound: "fire_beachball",
        chargeAnchorOffset: {
            x: 40,
            y: 10
        },
        trackKey: "strandball"
    }), s(o, r.weaponType.BOOMERANG, {
        key: r.weaponType.BOOMERANG,
        img: "weapons/weapon_12",
        base: "weapons/weaponBase_12",
        aim: "weapons/weaponHead_12",
        aimAnchor: {
            x: .5,
            y: .5
        },
        desc: "",
        power: 1300,
        projectile: r.projectileType.BOOMERANG,
        chargeOffset: {
            x: 60,
            y: 50
        },
        rootOffset: {
            x: -5,
            y: 15
        },
        cost: 150,
        fireSound: "fire_boomerang",
        chargeAnchorOffset: {
            x: 70,
            y: 65
        },
        trackKey: "boomerang"
    }), o), r.castle = {
        castleSharko: {
            image: "castleSharko",
            charPosition: {
                x: 148,
                y: 307
            },
            charPositionF: {
                x: 251,
                y: 307
            },
            weaponPosition: {
                x: 148,
                y: 39
            },
            weaponPositionF: {
                x: 251,
                y: 39
            }
        },
        castleZig: {
            image: "castleZig",
            charPosition: {
                x: 226,
                y: 303
            },
            charPositionF: {
                x: 142,
                y: 303
            },
            weaponPosition: {
                x: 218,
                y: 28
            },
            weaponPositionF: {
                x: 142,
                y: 28
            }
        }
    }, r.character = {
        radius: 45,
        SHARKO: {
            key: "SHARKO",
            castle: r.castle.castleSharko
        },
        ZIG: {
            key: "ZIG",
            castle: r.castle.castleZig
        }
    }, r.deco = {
        spawnTable: ["propsBucket", "propsBuoy", "propsDuck", "propsDuckBuoy", "propsGoggles", "propsGreen1", "propsGreen2", "propsGreen3", "propsGreen4", "propsIce1", "propsIce2", "propsIce3", "propsIce4", "propsPalmBig", "propsPalmSmall", "propsShovel", "propsSnorkel", "propsUmbrella1", "propsUmbrella2", "propsUmbrella3", "propsUmbrellaClosed", "propsUmbrellaClosedYellow", "propsUmbrellaOpen", "propsUmbrellaOpenYellow"]
    }, r.getRandomDecoKey = function() {
        var e = Math.floor(r.deco.spawnTable.length * Math.random());
        return r.deco.spawnTable[e]
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    // what
    var a = {
        "./atlas/anim": 121,
        "./atlas/anim.json": 121,
        "./atlas/anim.png": 340,
        "./atlas/button": 122,
        "./atlas/button.json": 122,
        "./atlas/button.png": 341,
        "./atlas/frame": 123,
        "./atlas/frame.json": 123,
        "./atlas/frame.png": 342,
        "./atlas/fs_generic": 124,
        "./atlas/fs_generic.json": 124,
        "./atlas/fs_generic.png": 343,
        "./atlas/fs_generic.webp": 344,
        "./atlas/fx": 125,
        "./atlas/fx.json": 125,
        "./atlas/fx.png": 345,
        "./atlas/ingame": 126,
        "./atlas/ingame.json": 126,
        "./atlas/ingame.png": 346,
        "./atlas/label": 127,
        "./atlas/label.json": 127,
        "./atlas/label.png": 347,
        "./atlas/terrain": 128,
        "./atlas/terrain.json": 128,
        "./atlas/terrain.png": 348,
        "./atlas/weapons": 129,
        "./atlas/weapons.json": 129,
        "./atlas/weapons.png": 349,
        "./data/basePack": 130,
        "./data/basePack.json": 130,
        "./data/config": 4,
        "./data/config.js": 4,
        "./data/gamePack": 131,
        "./data/gamePack.json": 131,
        "./data/inputExamplePack": 132,
        "./data/inputExamplePack.json": 132,
        "./data/menuPack": 133,
        "./data/menuPack.json": 133,
        "./data/weaponSelectionConfig": 2,
        "./data/weaponSelectionConfig.js": 2,
        "./font/LondrinaSolid-Regular.css": 350,
        "./font/LondrinaSolid-Regular.woff": 134,
        "./font/Oswald-Bold.css": 351,
        "./font/Oswald-Bold.woff": 135,
        "./font/Oswald-SemiBold.css": 352,
        "./font/Oswald-SemiBold.woff": 136,
        "./font/Roboto-Regular.css": 353,
        "./font/Roboto-Regular.woff": 137,
        "./font/RobotoCondensed-BoldItalic.css": 354,
        "./font/RobotoCondensed-BoldItalic.woff": 138,
        "./image/aimReady.png": 355,
        "./image/background/ingame.png": 356,
        "./image/background/ingameCloud.png": 357,
        "./image/background/ingameIslandLeft1.png": 358,
        "./image/background/ingameIslandLeft2.png": 359,
        "./image/background/ingameIslandRight1.png": 360,
        "./image/background/ingameIslandRight2.png": 361,
        "./image/background/ingameSun.png": 362,
        "./image/background/ingameWaterBack.png": 363,
        "./image/background/ingameWaterFront.png": 364,
        "./image/castleSharko.png": 365,
        "./image/castleZig.png": 366,
        "./image/character.jpeg": 367,
        "./image/character.webp": 368,
        "./image/loading.jpeg": 369,
        "./image/loading.webp": 370,
        "./image/loadingEnd.jpeg": 371,
        "./image/loadingEnd.webp": 372,
        "./image/logo.png": 373,
        "./image/logo.webp": 374,
        "./image/preload.png": 375,
        "./image/preload.webp": 376,
        "./image/sandseamless.png": 377,
        "./image/selectionSharko.png": 378,
        "./image/selectionSharko.webp": 379,
        "./image/selectionZig.png": 380,
        "./image/selectionZig.webp": 381,
        "./image/start.jpeg": 382,
        "./image/start.jpg": 383,
        "./image/start.png": 384,
        "./image/start.webp": 385,
        "./layout/characterSelection": 139,
        "./layout/characterSelection.json": 139,
        "./layout/description": 140,
        "./layout/description.json": 140,
        "./layout/dummy": 141,
        "./layout/dummy.json": 141,
        "./layout/end": 142,
        "./layout/end.json": 142,
        "./layout/ingame": 143,
        "./layout/ingame.json": 143,
        "./layout/loading": 144,
        "./layout/loading.json": 144,
        "./layout/lobby": 145,
        "./layout/lobby.json": 145,
        "./layout/nameInput": 146,
        "./layout/nameInput.json": 146,
        "./layout/settings": 147,
        "./layout/settings.json": 147,
        "./layout/start": 148,
        "./layout/start.json": 148,
        "./layout/tutorial": 149,
        "./layout/tutorial.json": 149,
        "./layout/tutorialAnim": 150,
        "./layout/tutorialAnim.json": 150,
        "./layout/upgrade": 151,
        "./layout/upgrade.json": 151,
        "./layout/weaponPreview": 152,
        "./layout/weaponPreview.json": 152,
        "./layout/wheel": 153,
        "./layout/wheel.json": 153,
        "./locale/de-DE.csv": 386,
        "./locale/en-US.csv": 387,
        "./locale/es-ES.csv": 388,
        "./locale/fr-FR.csv": 389,
        "./locale/pt-BR.csv": 390,
        "./snd/Splash.m4a": 391,
        "./snd/Splash.ogg": 392,
        "./snd/aim_goldenturret.m4a": 393,
        "./snd/aim_goldenturret.ogg": 394,
        "./snd/alert.m4a": 395,
        "./snd/alert.ogg": 396,
        "./snd/button.m4a": 397,
        "./snd/button.ogg": 398,
        "./snd/countdown.m4a": 399,
        "./snd/countdown.ogg": 400,
        "./snd/end_loss.m4a": 401,
        "./snd/end_loss.ogg": 402,
        "./snd/end_win.m4a": 403,
        "./snd/end_win.ogg": 404,
        "./snd/explosion.m4a": 405,
        "./snd/explosion.ogg": 406,
        "./snd/explosion_sunscreenbomb.m4a": 407,
        "./snd/explosion_sunscreenbomb.ogg": 408,
        "./snd/explosion_waterbomb.m4a": 409,
        "./snd/explosion_waterbomb.ogg": 410,
        "./snd/fire_bananabomb.m4a": 411,
        "./snd/fire_bananabomb.ogg": 412,
        "./snd/fire_beachball.m4a": 413,
        "./snd/fire_beachball.ogg": 414,
        "./snd/fire_boomerang.m4a": 415,
        "./snd/fire_boomerang.ogg": 416,
        "./snd/fire_cannon.m4a": 417,
        "./snd/fire_cannon.ogg": 418,
        "./snd/fire_catapult.m4a": 419,
        "./snd/fire_catapult.ogg": 420,
        "./snd/fire_ducklingcannon.m4a": 421,
        "./snd/fire_ducklingcannon.ogg": 422,
        "./snd/fire_goldenturret.m4a": 423,
        "./snd/fire_goldenturret.ogg": 424,
        "./snd/fire_harpoon.m4a": 425,
        "./snd/fire_harpoon.ogg": 426,
        "./snd/fire_icecreamcannon.m4a": 427,
        "./snd/fire_icecreamcannon.ogg": 428,
        "./snd/fire_slingshot.m4a": 429,
        "./snd/fire_slingshot.ogg": 430,
        "./snd/fire_sunscreenbomb.m4a": 431,
        "./snd/fire_sunscreenbomb.ogg": 432,
        "./snd/fire_waterbomb.m4a": 433,
        "./snd/fire_waterbomb.ogg": 434,
        "./snd/loss_Sharko.m4a": 435,
        "./snd/loss_Sharko.ogg": 436,
        "./snd/loss_Zig.m4a": 437,
        "./snd/loss_Zig.ogg": 438,
        "./snd/music.m4a": 439,
        "./snd/music.ogg": 440,
        "./snd/payout.m4a": 441,
        "./snd/payout.ogg": 442,
        "./snd/sel_Sharko.m4a": 443,
        "./snd/sel_Sharko.ogg": 444,
        "./snd/sel_Zig.m4a": 445,
        "./snd/sel_Zig.ogg": 446,
        "./snd/upgrade_weapon.m4a": 447,
        "./snd/upgrade_weapon.ogg": 448,
        "./snd/warning.m4a": 449,
        "./snd/warning.ogg": 450,
        "./snd/wheel_appear.m4a": 451,
        "./snd/wheel_appear.ogg": 452,
        "./snd/wheel_disappear.m4a": 453,
        "./snd/wheel_disappear.ogg": 454,
        "./snd/wheel_spinning.m4a": 455,
        "./snd/wheel_spinning.ogg": 456,
        "./snd/wheel_stop.m4a": 457,
        "./snd/wheel_stop.ogg": 458
    };

    // ah yes, n() and o()

    // some loader
    function n(e) {
        var t = o(e);
        return i(t)
    }

    // paths of the assets above or sum
    function o(e) {
        var t = a[e];
        if (!(t + 1)) {
            var i = new Error("Cannot find module '" + e + "'");
            throw i.code = "MODULE_NOT_FOUND", i
        }
        return t
    }

    //  more path shit
    n.keys = function() {
        return Object.keys(a)
    }, n.resolve = o, e.exports = n, n.id = 120

}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/anim_805f444e7dd25a365e953a918e383377.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/button_218ce49ba0168ca57602ede08b634b94.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/frame_1aa4cd4209922712e176e150793715a8.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/fs_generic_3ecc754ef9183d9676d6d3322bd55ad2.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/fx_1501992d347a4ae56ea502002bf72789.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/ingame_c3a03c6fd16c5ac3421d4d571a9c940d.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/label_db96cbb58cc1a0d95b0ff633b8637437.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/terrain_224cc6a12009564fdae651ff89a1689b.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/weapons_385efc46ca424553cae560c49770fb00.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/data/basePack_5032ce785873aed04a5292b46c07e98f.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/data/gamePack_e1b3699977d2ba7a0afd7e12da088214.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/data/inputExamplePack_1f392551af74bc927d687561c5359022.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/data/menuPack_dca8de6423ee4c699bab0b9401be66b1.json"
}, function(e, t) {
    e.exports = "../../assets/font/LondrinaSolid-Regular_2559d0ac8f71ef2d2b8a3cf5321c31bf.woff"
}, function(e, t) {
    e.exports = "../../assets/font/Oswald-Bold_5d1ff597bd1288d50de5297eaa638141.woff"
}, function(e, t) {
    e.exports = "../../assets/font/Oswald-SemiBold_31568edf0e069b14b7da0f2316c0b5e5.woff"
}, function(e, t) {
    e.exports = "../../assets/font/Roboto-Regular_9f0f74b9d7d1a3eb0d1cac5fbc025e47.woff"
}, function(e, t) {
    e.exports = "../../assets/font/RobotoCondensed-BoldItalic_e43d3ee19b7895e773d2826287b339c5.woff"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/characterSelection_f36ef99d89474ddb5980591b1437a0d4.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/description_0c42b7e69b974e18a5e93498f223cf2d.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/dummy_2f9154b3e2b7b73c8452f93be37ec51b.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/end_5bf08a1514fef5ac7ea429e6b03d0b1e.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/ingame_79bc76ce4a9fac35aefbf958cffb5fab.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/loading_2e4186539f6c01d3e64874ae0d459871.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/lobby_5273c305768aaebccfaa8c8a88bfa77a.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/nameInput_29454c8320628b004a4fb9837a5df30f.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/settings_46861b6637d5400253d1861aae9ef36a.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/start_0d0068218d36d3c304a46e3f7c8b17bf.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/tutorial_8f09dc6a993ddf18ccd7d2f85e1fa0d9.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/tutorialAnim_ec0f22a630f1cb36c998edbeaf7f3bd7.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/upgrade_1adf5904cb0b6910e309c16a03689470.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/weaponPreview_7f5caed9a41bca7bc590bffaea6e1e8c.json"
}, function(e, t, i) {
    e.exports = i.p + "assets/layout/wheel_7f6aa5d8ef10e312165c1f3f51a8b93f.json"
}, , , , , , function(e, t, i) {
    
    var a = {
        serverAddress: "wss://multiplayer.toggo.de/zignsharkoballerburgmp",         // multiplayer websocket
        clientTickDelay: .1,
        clientMaxDt: .1,
        toggoKey: "zignsharko-ballerbug-multiplayer",                               // auth keys or shit
        storageKey: "zignsharko-ballerbug-multiplayer-0.0.0",
        serverStorageKey: "zignsharko-ballerbug-multiplayer-0.0.0",

        // wind speed and some
        windValues: [{
            speed: 0,
            chance: .3
        }, {
            speed: 50,
            chance: .4
        }, {
            speed: 100,
            chance: .3
        }],
        windChangeSpeed: 10,

        // animation/cutscenen durations
        durationGameIntro: 3,
        durationWheelTween: 1.5,
        durationWeaponSelection: 5,
        durationWheelRotate: 1.5,
        delayBetweenStopAndHide: .5,
        durationWeaponPreviewTween: 1,
        durationWeaponPreview: 1,
        countDownBeforeShooting: 0,

        // the time you can shoot
        durationShootingTurn: 8,

        // the name says it
        delayBeforeStartingNextRound: 1,
        newMsg: function(e, t) {
            return {
                t: e,
                d: t || {}
            }
        },

        mfield: {
            LOBBY_SETUP: "LOBBY_SETUP",
            SERVER_SETUP: "SERVER_SETUP",
            SERVER_PLAYER_INFO: "SERVER_PLAYER_INFO",
            SERVER_FRAME: "SERVER_FRAME",
            CLIENT_FRAME: "CLIENT_FRAME",
            KICK: "KICK",
            ARENA_LAND_SETUP: "ARENA_LAND_SETUP",
            EVENT: "EVENT",
            EVENT_ID: "EVENT_ID",
            EVENT_SYNC_GAME_TIME: "EVENT_SYNC_GAME_TIME",
            EVENT_GAME_INTRO: "EVENT_GAME_INTRO",
            EVENT_WEAPON_SELECTION: "EVENT_WEAPON_SELECTION",
            EVENT_SHOOTING_TURN: "EVENT_SHOOTING_TURN",
            EVENT_CHANGE_WEAPON: "EVENT_CHANGE_WEAPON",
            EVENT_EXPLOSION: "EVENT_EXPLOSION",
            EVENT_PLAYER_HIT: "EVENT_PLAYER_HIT",
            EVENT_GAME_OVER: "EVENT_GAME_OVER",
            PROJECTILE_DATA: "PROJECTILE_DATA",
            EXPLOSION_DATA: "EXPLOSION_DATA",
            WIND_DATA: "WIND_DATA",
            WEAPON_TYPE: "WEAPON_TYPE",
            DISCONNECT: "DISCONNECT",
            PLAYER_ID: "PLAYER_ID",
            IS_HOST: "IS_HOST",
            GAME_OVER: "GAME_OVER",
            WINNER_INDEX: "WINNER_INDEX"
        },

        gameState: {
            WAITING: "WAITING",
            WEAPON_SELECTION: "WEAPON_SELECTION",
            SHOOTING: "SHOOTING",
            INTRO: "INTRO",
            GAME_OVER: "GAME_OVER"
        },

        connectError: {
            ERROR: "e",
            BADWORD: "bw",
            DUPLICATE: "d",
            WRONG_PASSWORD: "wp",
            INVALID_DATA: "id"
        },

        connectionStatus: {
            BLOCKED: "b",
            CONNECTED: "c",
            DISCONNECTED: "dc",
            GAME: "g",
            LOBBY: "l",
            TUTORIAL: "t"
        },

        TEXT: {
            badName: "Diesen Namen kannst du nicht nehmen.",
            takenName: "Diesen Namen gibt es schon.",
            wrongPass: "Das Passwort stimmt nicht!",
            lostConnection: "Verbindung verloren.",
            couldNotConnect: "Konnte nicht verbunden werden.",
            invalidData: "Invalid data.",
            loginNameTooShort: "Der Name ist zu kurz.",
            loginPassTooShort: "Das Passwort ist zu kurz.",
            registerLoginTakenName: "Der Name ist leider schon vergeben. Denk dir einen Neuen aus.",
            loginNameNotExistTitle: "Hast du dich vielleicht vertippt?",
            loginNameNotExistText: "Wenn du es vergessen hast, ist das auch nicht schlimm, melde dich einfach neu an.",
            loginWrongPassTitle: "Das Passwort stimmt nicht!",
            loginWrongPassText: "Hast du dich vielleicht vertippt? Wenn du es vergessen hast, ist das auch nicht schlimm, melde dich neu an."
        },

        // create projectile object
        newProjectileData: function(e, t, i, a, n) {
            return {
                uuid: e || "0",
                alive: t || !1,
                type: i || null,
                position: {
                    x: a ? a.x : 0,
                    y: a ? a.y : 0
                },
                velocity: {
                    x: n ? n.x : 0,
                    y: n ? n.y : 0
                }
            }
        },

        // create explosion object
        newExplosionData: function(e, t, i) {
            return {
                projectileUuid: e || "0",
                position: {
                    x: t ? t.x : 0,
                    y: t ? t.y : 0
                },
                landIndex: null == i ? -1 : i
            }
        }
    };
    e.exports = a
}, , , , , function(e, t, i) {
    i(165), i(331), i(333), i(335), i(338), e.exports = i(462)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    e.exports = i.p + "assets/atlas/anim_9a61c892a353d8caec549dcc8453730d.png"                  // not this again
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/button_a33d3b5760c1e9d63ef0783fd4a40343.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/frame_e5381ca088e2b2797fdf125bdfbaacb0.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/fs_generic_63c2efce2d54716e6e9bdccefeeeb382.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/fs_generic_c2c755d4fdc98d2fdaaae61e62b3b230.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/fx_c90ab866b36f76b99b19c4e4f1a01f63.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/ingame_a21ffe6381d5f57deb61db57c488b3e9.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/label_6e6186f4a5ed4e788b57c6f7ed5769e4.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/terrain_a501853714d3a21f69636f55d367808e.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/atlas/weapons_4e9acdecb8f1fc5fe19d39d5f5e5719f.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/font/LondrinaSolid-Regular_62270461a9b9c8c56deaf41b9475194a.css"
}, function(e, t, i) {
    e.exports = i.p + "assets/font/Oswald-Bold_5381b8d259f4c17e621c424e16c90923.css"
}, function(e, t, i) {
    e.exports = i.p + "assets/font/Oswald-SemiBold_43b3144fb2f8f93691c6151f2257c25e.css"
}, function(e, t, i) {
    e.exports = i.p + "assets/font/Roboto-Regular_3edf06c0c7f86e49238907eb56f157b2.css"
}, function(e, t, i) {
    e.exports = i.p + "assets/font/RobotoCondensed-BoldItalic_e7eff458000e266571aa8fbdcedfcb66.css"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/aimReady_29f980ea0f5f6014d79a22b58373c230.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingame_5b4e3bdb0d52e69283ceccfb11b2a1fa.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameCloud_337da0de57ed368e6a0c4a10c2b4ae34.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameIslandLeft1_a68c37c0754f4a1ad108aa9e9f63ce2b.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameIslandLeft2_24df51cc46fb465290918677257f399f.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameIslandRight1_ad06816450323aa0842ec952c1415bd1.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameIslandRight2_83d6d1781fc16392d0294b6ca36ae1db.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameSun_17a2fc280ca202df668a6e21a367a8c1.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameWaterBack_ddb27a221124fbaea973df6e19dc2cbb.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/background/ingameWaterFront_fc07d667f75a128f6c66a10738d27315.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/castleSharko_22f0acaad8e2aad688cdcd234d37c78b.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/castleZig_b9544ad0f79e2d8d4e1c1d0200e26487.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/character_b673ea5daea57553b2dad612d8e48254.jpeg"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/character_84093b1f8ee9b08cf07c8a31241629fd.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/loading_f612f1e0605c774eda5549b8268fb676.jpeg"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/loading_59ee2d0af8d88990c7145d449b3123f1.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/loadingEnd_946afb91a62e96b5dea78bc4ae7e2b5d.jpeg"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/loadingEnd_7795ded58e2284ca12b630f74f17e55c.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/logo_f6b05e7959bff8c4353bf05cff7046e6.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/logo_9f3c9f926e86d8f495c7ed4af48fdbf4.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/preload_105bcfdefad7a9a26ac705390b6ad3c5.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/preload_7b100ce46223eaacf4da538a11179029.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/sandseamless_73f541f5679f848eeb83820dd6a0e13c.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/selectionSharko_b3e1fd767455a14e31af92a17835ad94.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/selectionSharko_4851828b4acf94532718ede2e63a8ed9.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/selectionZig_b6238458a53701897d25a2ae3f99741e.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/selectionZig_f01c6e0aa7c0ba5c036f25a2e30a6401.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/start_a66e54586912d357e594b0079fbe5460.jpeg"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/start_82a1b89f07f42301aa91794c74763841.jpg"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/start_328449a8c345f4b8884fff9a720ec8fe.png"
}, function(e, t, i) {
    e.exports = i.p + "assets/image/start_95a6c63d6f01cde3b9c827b9f55f033a.webp"
}, function(e, t, i) {
    e.exports = i.p + "assets/locale/de-DE_fab65b6c6533fb85b65a54948727e0c1.csv"
}, function(e, t, i) {
    e.exports = i.p + "assets/locale/en-US_32891e8bbc8f1cc7dad5b4256861ed38.csv"
}, function(e, t, i) {
    e.exports = i.p + "assets/locale/es-ES_ac0ad7e718c9f157aef8f1e932e4d63d.csv"
}, function(e, t, i) {
    e.exports = i.p + "assets/locale/fr-FR_30b7f711663c3929d289b837a8ff5fe9.csv"
}, function(e, t, i) {
    e.exports = i.p + "assets/locale/pt-BR_f2b653b37604d0b195368fa850f795a4.csv"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/Splash_137743537b27a2f839cf8035012f2c5a.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/Splash_9547aa0ddb32770399e6189b7bc42d1d.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/aim_goldenturret_f26420b08fb7db8d04a453c6ed96d2cb.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/aim_goldenturret_5f9f17378f1d211217d7b9bea66ccc9b.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/alert_62a74871f2efb0a50e3c32d517eb1fff.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/alert_bfe10468dd414011e15024a785668221.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/button_5272a767249d125beea1ba8b26ab34ad.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/button_4e06ecb6f952c836133813954b749aeb.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/countdown_4403740002c1c5d6c8ee844054d7960d.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/countdown_44f49c7aab0a096af01c7d48dbce5800.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/end_loss_56f19e85ed99dd8817f3867b7435f7de.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/end_loss_0b777cafdceb621a3a89047445b87460.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/end_win_d083cc1449ec7f67181cf60fc4dcfa29.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/end_win_99e240b1fe120d8c39f622e894e3ba25.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_b413a5c4514ec09e6098169209364799.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_2c4d11500e51b2ef76ce03871be42276.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_sunscreenbomb_903fa21ebb6a54dea7bfb4aab262d8f8.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_sunscreenbomb_c6d28073a9d5d6f5481dd089a2a86aae.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_waterbomb_9cc0b0d2354d31c8322f6a56cd58b73f.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/explosion_waterbomb_206a0184e3d09cc083328087ef6b4a82.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_bananabomb_f90cce3f782a481c1b009a5f033aa95c.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_bananabomb_504b9ebf1886684c2b8d89756c1fdb85.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_beachball_6e5044a921b93e9b7b0770d7a735acaf.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_beachball_fb9897263b16afba94af25e5b5379a00.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_boomerang_f4164b82065983468867fe1038c5888b.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_boomerang_73e1faef0ac0cc9de745ea3940b45b28.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_cannon_9cd9a06b3dc331907be58d732c6a2108.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_cannon_a64bbfceb5d5cfa328cd4c009bd4315c.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_catapult_7b97fcde53f1913554513d45002828ce.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_catapult_db9ef99e112ce22f42cc1e2bbaaee7a2.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_ducklingcannon_fce86a885de892dcc9e521c2391da0b5.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_ducklingcannon_d3c2987dc86ac92c932db7ee23f1ae1a.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_goldenturret_3d30289056bd505c16ea3e907ad6ae60.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_goldenturret_87c3917aa422da33f70a7dbf72f425a6.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_harpoon_f136d914b96e9618789463cf0a3013b0.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_harpoon_6d16c91e7c27747df6353f502331dc80.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_icecreamcannon_c91dcbacc504346d5723839e9ae3689a.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_icecreamcannon_1b02ae3b59adadc3f5d167e6a21bb900.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_slingshot_c8ba47b0df4e98df26090e09ecc64b22.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_slingshot_12bfac89fcbabfa808af2c211a52b048.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_sunscreenbomb_cd2d4d274144d757a8ed0018f61ab7e6.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_sunscreenbomb_bebf3c075d36d76c2fa7bc418f0845c1.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_waterbomb_ab285d71eb9161b1272ece712d657a91.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/fire_waterbomb_7467fe75ed3d424c79495dabdde96974.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/loss_Sharko_8a6f86eebd2a8f1cf8d674022e1f31d9.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/loss_Sharko_0d70ae6a38052f8fabecc72424858b09.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/loss_Zig_b353cfed0be08b7ac5081bca8719fbba.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/loss_Zig_6ec9bd62083bfe91278bef0527bae2dc.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/music_8b530b7da198194556bb188ad2034672.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/music_98e0ab462719fcdfb7727fecc036b167.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/payout_3d34da82a6861cb8a6beb48697f42b54.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/payout_78ef512206bcac978572e419012f0cda.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/sel_Sharko_9095a71c5a6199af561caece962b01ce.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/sel_Sharko_0bcc8f5213d8958971ca409162f8a1ff.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/sel_Zig_016b4f808e32842f6140a59390628301.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/sel_Zig_6eb823e790eaf351708abce58f172964.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/upgrade_weapon_2b361f5ae0141808289eb6275b160b02.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/upgrade_weapon_75145783d536348dbb664b89ffd2fee5.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/warning_d1c46e45b8d3e7057983111c57069de1.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/warning_98de677ea0436216c345dad6ab913ad3.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_appear_fbdafb7f814f4105c31eb698ddbc7734.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_appear_28151d7203d88dfa3f06b605989b1e81.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_disappear_3af21e118a0ebce0e5bcdd0a3bda02ca.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_disappear_af2a75d9ff748d651c00fa1590c7e3df.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_spinning_008467a2e487f122c517a1d148ad2d08.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_spinning_e98b0d5c4bca7d29b17a3275899303ed.ogg"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_stop_5cc53d318eca711c779e202dc475724f.m4a"
}, function(e, t, i) {
    e.exports = i.p + "assets/snd/wheel_stop_950e4301d65ce139af52aed089eef66a.ogg"
}, , function(e, t) {

    // some properties left from the devs
    var i = {
        Project: "1.0.2",
        SheepCore: "2.1.12",
        SheepUi: "2.2.2",
        Lambda: "1.2.2"
    };

    "fsVersion" in window ? Phaser.Utils.mixin(i, window.fsVersion) : window.fsVersion = i

}, function(e, t) {}, function(e, t, i) {
    i.r(t);
    var a = i(163),
        n = (i(10), i(35)),
        o = i(3),
        s = i(157);

    function r(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var l = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, Phaser.Point.prototype.lerp = function(e, t) {
                this.x = (1 - t) * this.x + t * e.x, this.y = (1 - t) * this.y + t * e.y
            }
        }
        var t, i, a;
        return t = e, (i = [{
            key: "randomRange",
            value: function(e, t) {
                return Math.random() * (t - e) + e
            }
        }, {
            key: "randomRangeInt",
            value: function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            }
        }, {
            key: "setMouseVisibility",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (void 0 === this.mouseVisible && (this.mouseVisible = !0), this.mouseVisible !== e) {
                    this.mouseVisible = e;
                    var t = document.getElementsByTagName("body")[0];
                    t.style.cursor = e ? "default" : "none"
                }
            }
        }, {
            key: "getMeshBoneByName",
            value: function(e, t) {
                if (e.name === t) return e;
                for (var i = 0; i < e.children.length; i++) {
                    var a = this.game.getMeshBoneByName(e.children[i], t);
                    if (a) return a
                }
                return null
            }
        }, {
            key: "attachButtonSoundTraverse",
            value: function(e, t) {
                e.onInputUp && e.onInputUp.add(t);
                for (var i = 0; i < e.children.length; i++) this.attachButtonSoundTraverse(e.children[i], t)
            }
        }, {
            key: "scaleTextToMaxWidth",
            value: function(e, t) {
                if (e.width > t) {
                    var i = t / e.width;
                    e.scale.set(i)
                }
            }
        }, {
            key: "removeFromParent",
            value: function(e) {
                e && e.parent && e.parent.remove(e)
            }
        }, {
            key: "copyShuiElement",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!e) return null;
                var i, a = e.shui.position;
                if (e instanceof o.a.Image) i = new o.a.Image(this.game, 0, 0, e.key, e.frame);
                else if (e instanceof o.a.Button) {
                    if (i = new o.a.Button(this.game, 0, 0, e.key, e._onOutFrame, e._onDownFrame, e._onOverFrame), e.children[0] && e.children[0] instanceof Phaser.Text) {
                        var n = new o.a.Text(this.game, e.children[0].position.x, e.children[0].position.y, e.children[0].text, e.children[0].style);
                        i.setText("default", n)
                    }
                } else {
                    if (!(e instanceof o.a.Text)) return console.log("shui element type not supported"), null;
                    i = new o.a.Text(this.game, a.x, a.y, e.text, e.style)
                }
                return i.shui.align.copyFrom(e.shui.align), i.shui.position.copyFrom(e.shui.position), i.scale.copyFrom(e.scale), i.anchor.copyFrom(e.anchor), i.rotation = e.rotation, i.position.copyFrom(e.shui.position), t && t.addChild(i), i
            }
        }, {
            key: "fixButtonHoverBug",
            value: function(e) {
                this.game.time.events.add(100, (function() {
                    e.frameName = e._onOutFrame
                }), this)
            }
        }]) && r(t.prototype, i), a && r(t, a), e
    }();

    function h(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var c = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.socket = null, this._onDisconnect = null, this._onMessage = null, this._onError = null, this._onLogin = null, this._onLogout = null, this._messages = [], this._user = null, this.ping = 0
        }
        var t, i, a;
        return t = e, a = [{
            key: "_prefixAddress",
            value: function(t) {
                return "https:" === window.location.protocol ? (t = t.replace(e._prefixReplax, ""), "wss://".concat(t)) : t
            }
        }], (i = [{
            key: "connect",
            value: function(t, i) {
                this.socket = new WebSocket(e._prefixAddress(t)), this.socket.addEventListener("open", (function() {
                    "function" == typeof i && i()
                })), this.socket.addEventListener("error", this._handleError.bind(this)), this.socket.addEventListener("close", this._handleDisconnect.bind(this)), this.socket.addEventListener("message", this._handleMessage.bind(this))
            }
        }, {
            key: "reconnect",
            value: function(e) {
                var t = this;
                this._user = null;
                var i = this.socket.url,
                    a = this._onDisconnect;
                this._onDisconnect = null, this.onDisconnect((function() {
                    t.onDisconnect(a), t.connect(i, e)
                })), this.socket.close()
            }
        }, {
            key: "login",
            value: function(t, i, a) {
                if (this._isReady()) {
                    if (this._isLoggedIn()) return console.warn("Already logged in"), void("function" == typeof a && a(e.LoginReplyType.SUCCESS, this._user));
                    this._onLogin = "function" == typeof a ? a : null;
                    var n = {};
                    n[e.MsgFields.TYPE] = e.MsgType.LOGIN, n[e.MsgFields.TOKEN] = null, n[e.MsgFields.DATA] = {
                        nickname: t,
                        password: i
                    }, this.socket.send(JSON.stringify(n))
                } else console.error("Connection is not ready.")
            }
        }, {
            key: "loginWithToken",
            value: function(t, i) {
                if (this._isReady()) {
                    if (this._isLoggedIn()) return console.warn("Already logged in"), void("function" == typeof i && i(e.LoginReplyType.SUCCESS, this._user));
                    this._onLogin = "function" == typeof i ? i : null;
                    var a = {};
                    a[e.MsgFields.TYPE] = e.MsgType.LOGIN_WITH_TOKEN, a[e.MsgFields.TOKEN] = null, a[e.MsgFields.DATA] = {
                        token: t
                    }, this.socket.send(JSON.stringify(a))
                } else console.error("Connection is not ready.")
            }
        }, {
            key: "logout",
            value: function(e) {
                console.warn("Logout not implemented. Use reconnect().")
            }
        }, {
            key: "register",
            value: function(t, i, a) {
                if (this._isReady()) {
                    this._onLogin = "function" == typeof a ? a : null;
                    var n = {};
                    n[e.MsgFields.TYPE] = e.MsgType.REGISTER, n[e.MsgFields.TOKEN] = null, n[e.MsgFields.DATA] = {
                        nickname: t,
                        password: i
                    }, this.socket.send(JSON.stringify(n))
                } else console.error("Connection is not ready.")
            }
        }, {
            key: "joinRoom",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (this._isReady() && this._isLoggedIn()) {
                    var a = {};
                    a[e.MsgFields.TYPE] = e.MsgType.JOIN_ROOM, a[e.MsgFields.TOKEN] = this._user.token, a[e.MsgFields.DATA] = {
                        room: t,
                        data: i
                    }, this.socket.send(JSON.stringify(a))
                } else console.error("Connection is not ready or not logged in.")
            }
        }, {
            key: "leaveRoom",
            value: function() {
                if (this._isReady() && this._isLoggedIn()) {
                    var t = {};
                    t[e.MsgFields.TYPE] = e.MsgType.LEAVE_ROOM, t[e.MsgFields.TOKEN] = this._user.token, t[e.MsgFields.DATA] = null, this.socket.send(JSON.stringify(t))
                } else console.error("Connection is not ready or not logged in.")
            }
        }, {
            key: "roomMsg",
            value: function(t) {
                if (this._isReady() && this._isLoggedIn()) {
                    var i = {};
                    i[e.MsgFields.TYPE] = e.MsgType.GAME_UPDATE, i[e.MsgFields.TOKEN] = this._user.token, i[e.MsgFields.DATA] = t, this.socket.send(JSON.stringify(i))
                } else console.error("Connection is not ready or not logged in.")
            }
        }, {
            key: "pullMessages",
            value: function() {
                var t = this._messages;
                this._messages = [];
                for (var i = 0; i < t.length; i++) t[i].data = t[i][e.MsgFields.DATA], t[i].time = t[i][e.MsgFields.TIME], delete t[i][e.MsgFields.DATA], delete t[i][e.MsgFields.TIME];
                return t
            }
        }, {
            key: "getUser",
            value: function() {
                return this._user
            }
        }, {
            key: "onDisconnect",
            value: function(e) {
                "function" == typeof e ? this._onDisconnect = e : console.error("cb is not a function")
            }
        }, {
            key: "onError",
            value: function(e) {
                "function" == typeof e ? this._onError = e : console.error("cb is not a function")
            }
        }, {
            key: "onMessage",
            value: function(e) {
                "function" == typeof e ? this._onMessage = e : console.error("cb is not a function")
            }
        }, {
            key: "_handleDisconnect",
            value: function(e) {
                this._onDisconnect && this._onDisconnect(e)
            }
        }, {
            key: "_handleError",
            value: function(e) {
                this._onError && this._onError(e)
            }
        }, {
            key: "_handleMessage",
            value: function(t) {
                if (this._onMessage && this._onMessage(t), t && t.data) {
                    var i = JSON.parse(t.data),
                        a = i[e.MsgFields.DATA];
                    switch (i[e.MsgFields.TYPE]) {
                        case e.MsgType.LOGIN:
                            a.success === e.LoginReplyType.SUCCESS ? this._user = {
                                nickname: a.nickname,
                                user_id: a.user_id,
                                token: a.token
                            } : this._user = null, "function" == typeof this._onLogin && (this._onLogin(a.success, this._user), this._onLogin = null);
                            break;
                        case e.MsgType.LOGOUT:
                            this._user = null, "function" == typeof this._onLogout && (this._onLogout(), this._onLogout = null);
                            break;
                        case e.MsgType.GAME_UPDATE:
                            this._messages.push(a);
                            break;
                        case e.MsgType.PING:
                            this.ping = a.ping;
                            break;
                        default:
                            console.warn('unhandled message type "'.concat(i.type), i)
                    }
                }
            }
        }, {
            key: "_isReady",
            value: function() {
                return this.socket && this.socket.readyState === WebSocket.OPEN
            }
        }, {
            key: "_isLoggedIn",
            value: function() {
                return null !== this._user
            }
        }]) && h(t.prototype, i), a && h(t, a), e
    }();

    function u(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function p(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    c.version = "2.0.6", c.MsgType = {
        LOGIN: 0,
        JOIN_ROOM: 1,
        LEAVE_ROOM: 2,
        GAME_UPDATE: 3,
        PING: 4,
        REGISTER: 5,
        LOGIN_WITH_TOKEN: 6,
        LOGOUT: 7
    }, c.LoginReplyType = {
        SUCCESS: 0,
        ERROR_BADWORD: 1,
        ERROR_DUPLICATE_USERNAME: 2,
        ERROR_WRONG_PASSWORD: 3,
        ERROR_TOKEN_EXPIRED: 4,
        ERROR_UNKNOWN_USER: 5
    }, c.RegisterReplyType = {
        SUCCESS: 0,
        ERROR_BADWORD: 1,
        ERROR_DUPLICATE_USERNAME: 2,
        ERROR_ANONYMOUS: 3
    }, c.MsgFields = {
        TYPE: "0",
        DATA: "1",
        TIME: "2",
        TOKEN: "3"
    }, c._prefixReplax = /^wss?:\/\//gi;
    var g = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.sc = this.game.sc, this.mfield = this.sc.mfield, this.status = this.sc.connectionStatus, this.flock = new c, this.flock._onDisconnect = this._onError.bind(this), this.flock._onError = this._onError.bind(this), this.msgTimer = 0, this.playerId = -1, this.loginName = "", this.loginPass = "", this._isHost = !1, this.connectionStatus = this.status.DISCONNECTED, this.connectedOnce = !1, this.gameState = null, this.gameOver = !1, this.userLogout = !1, this.events = [], this.registerLoginFlag = !1
        }
        var t, i, a;
        return t = e, (i = [{
            key: "connect",
            value: function(e) {
                this.flock.connect(this.sc.serverAddress, e)
            }
        }, {
            key: "disconnect",
            value: function() {
                console.log("DISCONNECTED"), this.flock.socket.close()
            }
        }, {
            key: "_onError",
            value: function(e) {
                "error" !== this.game.state.current && (e || (e = this.sc.connectError.ERROR), this.connectionStatus = this.status.DISCONNECTED, this.userLogout ? (this.userLogout = !1, this.game.state.start("boot")) : this.game.state.start("error", !0, !1, e))
            }
        }, {
            key: "loginWithToken",
            value: function(e, t) {
                this._cbLogin = t, this.flock.loginWithToken(e, this._onLogin.bind(this))
            }
        }, {
            key: "login",
            value: function(e, t, i) {
                this.game.DEBUG_NETWORK && console.log("login with name: ".concat(e)), this._cbLogin = i, this.loginName = e, this.loginPass = t, this.flock.login(e, t, this._onLogin.bind(this))
            }
        }, {
            key: "register",
            value: function(e, t, i) {
                this._cbRegister = i, this.loginName = e, this.loginPass = t, this.flock.register(e, t, this._onRegister.bind(this))
            }
        }, {
            key: "resetConnectionStatus",
            value: function() {
                this.connectionStatus = this.status.CONNECTED, this.playerId = -1, this.gameOver = !1, this.trackLobby = !0
            }
        }, {
            key: "setGameState",
            value: function(e) {
                this.gameState = e
            }
        }, {
            key: "joinLobby",
            value: function() {
                this.connectionStatus === this.status.CONNECTED ? (this.connectionStatus = this.status.LOBBY, this.flock.joinRoom("lobby")) : console.log("Can not enter lobby from the current connection status")
            }
        }, {
            key: "_onLogin",
            value: function(e, t) {
                switch (this.game.DEBUG_NETWORK && console.log("Connection Manager: _OnLogin"), e) {
                    case c.LoginReplyType.SUCCESS:
                        this.game.DEBUG_NETWORK && console.log("logged in as", t), this.connectionStatus = this.status.CONNECTED, this._cbLogin(t);
                        break;
                    case c.LoginReplyType.ERROR_BADWORD:
                        this.game.DEBUG_NETWORK && console.log("login, username is a bad word!"), this._onError(this.sc.connectError.BADWORD);
                        break;
                    case c.LoginReplyType.ERROR_DUPLICATE_USERNAME:
                        this.game.DEBUG_NETWORK && console.log("login, username is already taken"), this._onError(this.sc.connectError.DUPLICATE);
                        break;
                    case c.LoginReplyType.ERROR_WRONG_PASSWORD:
                        this.registerLoginFlag ? console.log("register-login, account name already taken") : console.log("login, wrong password");
                        break;
                    case c.LoginReplyType.ERROR_TOKEN_EXPIRED:
                        console.log("login, token expired");
                        break;
                    case c.LoginReplyType.ERROR_UNKNOWN_USER:
                        console.log("login, unknown user");
                        break;
                    default:
                        console.log("unknown login event: ".concat(e))
                }
                this.registerLoginFlag = !1
            }
        }, {
            key: "_onRegister",
            value: function(e, t) {
                var i = this;
                switch (e) {
                    case c.RegisterReplyType.SUCCESS:
                        this.game.DEBUG_NETWORK && console.log("registered, logged in as", t), this.connectionStatus = this.status.CONNECTED, this._cbRegister(t);
                        break;
                    case c.RegisterReplyType.ERROR_BADWORD:
                        console.log("register, username is a bad word"), this._onError(this.sc.connectError.BADWORD);
                        break;
                    case c.RegisterReplyType.ERROR_DUPLICATE_USERNAME:
                        console.log("register, username is already taken"), this.flock.reconnect((function() {
                            i.registerLoginFlag = !0, i.login(i.loginName, i.loginPass, i._cbRegister)
                        }));
                        break;
                    case c.RegisterReplyType.ERROR_ANONYMOUS:
                        console.log("register, no account required");
                        break;
                    default:
                        console.log("unhandle register event: ".concat(e))
                }
            }
        }, {
            key: "logout",
            value: function() {
                this.userLogout = !0, this.disconnect()
            }
        }, {
            key: "pushMessages",
            value: function(e) {
                if (-1 !== this.playerId && (this.msgTimer += e, this.msgTimer > this.sc.clientTickDelay)) {
                    this.msgTimer -= this.sc.clientTickDelay, this.msgTimer > this.sc.clientTickDelay && (this.msgTimer = 0);
                    var t = this._getClientFrame();
                    t && (this.flock.roomMsg(t), this.events.length > 0 && (this.events = []))
                }
            }
        }, {
            key: "_getClientFrame",
            value: function() {
                for (var e, t = this.sc.newMsg(this.mfield.CLIENT_FRAME), i = [], a = 0; a < this.gameState.arena.projectiles.length; a++) {
                    var n = this.gameState.arena.projectiles[a];
                    i.push(this.sc.newProjectileData(n.uuid, n.alive, n.type, n.sprite.position, n.data.velocity))
                }
                return t.d = (u(e = {}, this.mfield.EVENT, this.events), u(e, this.mfield.PROJECTILE_DATA, i), e), t
            }
        }, {
            key: "clearMsgQueue",
            value: function(e) {
                this.flock.pullMessages()
            }
        }, {
            key: "pullMessages",
            value: function() {
                for (var e = this.flock.pullMessages(), t = 0; t < e.length; t++) {
                    var i = e[t];
                    switch (i.data.t) {
                        case this.mfield.LOBBY_SETUP:
                            this.handleLobbySetUp(i.data.d);
                            break;
                        case this.mfield.SERVER_SETUP:
                            this.handleServerSetup(i.data.d);
                            break;
                        case this.mfield.SERVER_PLAYER_INFO:
                            this.handleServerPlayerInfo(i.data.d);
                            break;
                        case this.mfield.SERVER_FRAME:
                            this.handleServerFrame(i.data.d);
                            break;
                        case this.mfield.KICK:
                            this.handleKick(i.data.d);
                            break;
                        case this.mfield.ARENA_LAND_SETUP:
                            this.game.gameState.buildNonHostLand(i.data.d);
                            break;
                        default:
                            console.log("unknown msg", i)
                    }
                }
            }
        }, {
            key: "handleLobbySetUp",
            value: function(e) {
                this.game.DEBUG_NETWORK && console.log(e)
            }
        }, {
            key: "handleServerSetup",
            value: function(e) {
                this.connectionStatus = this.status.GAME, this.playerId = e[this.mfield.PLAYER_ID], this._isHost = e[this.mfield.IS_HOST], this.game.DEBUG && (this.game.debug.extraText += "\n== Gameplay ======", this.game.debug.extraText += "\nPlayerID: ".concat(this.playerId, " ").concat(this._isHost)), this.gameState.setUpGame()
            }
        }, {
            key: "handleServerPlayerInfo",
            value: function(e) {
                var t = this;
                this.loginName = e[this.playerId], 0 === this.playerId && (this.enemyName = e[1]), 1 === this.playerId && (this.enemyName = e[0]), this.gameState.lobbyUI.onEnemyFound((function() {
                    t.gameState.lobbyUI.fadeOut()
                }))
            }
        }, {
            key: "handleServerFrame",
            value: function(e) {
                if (this.gameState) {
                    for (var t = e[this.mfield.EVENT], i = 0; i < t.length; i++) {
                        var a = t[i];
                        switch (this.game.DEBUG_NETWORK && console.log(a), a.t) {
                            case this.mfield.EVENT_SYNC_GAME_TIME:
                                this.gameState.gameUI && (this.gameState.gameUI.gameTime = a.d.t);
                                break;
                            case this.mfield.EVENT_GAME_INTRO:
                                this.gameState.handleGameIntro(a.d);
                                break;
                            case this.mfield.EVENT_WEAPON_SELECTION:
                                this.gameState.handleWeaponSelection(a.d);
                                break;
                            case this.mfield.EVENT_SHOOTING_TURN:
                                this.gameState.handleShootingTurn(a.d);
                                break;
                            case this.mfield.EVENT_CHANGE_WEAPON:
                                this.handleChangeWeaponEvent(a.d);
                                break;
                            case this.mfield.EVENT_EXPLOSION:
                                this.handleExplosionEvent(a.d);
                                break;
                            case this.mfield.EVENT_PLAYER_HIT:
                                this.handlePlayerHitEvent(a.d);
                                break;
                            case this.mfield.EVENT_GAME_OVER:
                                this.handleGameOver(a.d);
                                break;
                            default:
                                console.log("unkown event ".concat(a.t))
                        }
                    }
                    this.handleProjectileData(e[this.mfield.PROJECTILE_DATA]), this.handleWindData(e[this.mfield.WIND_DATA])
                } else console.error("game state not yet created")
            }
        }, {
            key: "handleChangeWeaponEvent",
            value: function(e) {
                e.PLAYER_ID !== this.playerId && this.gameState.changeEnemyWeapon(e.WEAPON_TYPE)
            }
        }, {
            key: "handleExplosionEvent",
            value: function(e) {
                if (e.PLAYER_ID !== this.playerId) {
                    var t = e[this.mfield.EXPLOSION_DATA],
                        i = e[this.mfield.PROJECTILE_DATA]; - 1 === t.landIndex ? this.gameState.arena.nonLocalProjectilesManager.sinkProjectile(t, i) : this.gameState.arena.nonLocalProjectilesManager.explodeProjectile(t, i)
                }
            }
        }, {
            key: "handlePlayerHitEvent",
            value: function(e) {
                if (!this.gameState.winnerFound) {
                    var t = e[this.mfield.WINNER_INDEX],
                        i = this.gameState.arena.getCharacterOfIndex(t).opponent;
                    this.gameState.playerHit(i)
                }
            }
        }, {
            key: "handleGameOver",
            value: function(e) {
                this.connectionStatus = this.status.CONNECTED, this.gameState.winnerIndex = e[this.mfield.WINNER_INDEX], e[this.mfield.DISCONNECT] && this.gameState.handleOpponentDisconnected(), this.gameState.setState(this.gameState.states.GAME_OVER), this.clearMsgQueue()
            }
        }, {
            key: "handleProjectileData",
            value: function(e) {
                this.gameState.arena.nonLocalProjectilesManager.handleProjectileData(e[this.game.otherPlayerIndex])
            }
        }, {
            key: "handleWindData",
            value: function(e) {
                this.game.windSpeed = e
            }
        }, {
            key: "handleKick",
            value: function(e) {
                this._onError(e)
            }
        }, {
            key: "leaveGame",
            value: function() {
                this.connectionStatus === this.status.GAME || this.connectionStatus === this.status.TUTORIAL ? (this.flock.leaveRoom(), this.clearMsgQueue(), this.resetConnectionStatus()) : console.log("could not leave current room")
            }
        }, {
            key: "pushEvent",
            value: function(e) {
                this.events.push(e)
            }
        }, {
            key: "sendNow",
            value: function() {
                this.msgTimer = this.sc.clientTickDelay + .01
            }
        }, {
            key: "isHost",
            value: function() {
                return this._isHost
            }
        }, {
            key: "pushArenaLand",
            value: function(e) {
                if (-1 !== this.playerId) {
                    var t = this.sc.newMsg(this.mfield.ARENA_LAND_SETUP);
                    t.d = {
                        arenaParameters: e
                    }, this.game.DEBUG_NETWORK && console.log(t), t && this.flock.roomMsg(t)
                }
            }
        }, {
            key: "sendWeaponChangeEvent",
            value: function(e) {
                var t, i = (u(t = {}, this.mfield.EVENT_ID, this.mfield.EVENT_CHANGE_WEAPON), u(t, this.mfield.WEAPON_TYPE, e), t);
                this.game.cm.pushEvent(i), this.sendNow()
            }
        }, {
            key: "sendExplosionEvent",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                    a = e.uuid,
                    n = Math.round(e.position.x),
                    o = Math.round(e.position.y),
                    s = {
                        x: n,
                        y: o
                    }; - 1 !== i && (s = this.gameState.arena.worldToBitMapSpace(n, o, i));
                var r = this.sc.newExplosionData(a, s, i),
                    l = (u(t = {}, this.mfield.EVENT_ID, this.mfield.EVENT_EXPLOSION), u(t, this.mfield.EXPLOSION_DATA, r), u(t, this.mfield.PROJECTILE_DATA, e), t);
                this.game.DEBUG_NETWORK && (console.log("---sending explosion event---"), console.log(l)), this.game.cm.pushEvent(l), this.sendNow()
            }
        }, {
            key: "sendPlayerHitEvent",
            value: function(e) {
                var t, i = (u(t = {}, this.mfield.EVENT_ID, this.mfield.EVENT_PLAYER_HIT), u(t, this.mfield.WINNER_INDEX, e), t);
                this.game.DEBUG_NETWORK && (console.log("---creating player hit event"), console.log(i)), this.game.cm.pushEvent(i), this.sendNow()
            }
        }]) && p(t.prototype, i), a && p(t, a), e
    }();

    function d(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var m, f = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.storage = new n.a.Storage(this.game.sc.toggoKey), this.STORAGE_KEYS = {
                WHEEL_TUTORIAL_FINISHED: {
                    KEY: "wheelTutorial",
                    DEFAULT_VALUE: !1
                },
                SHOOT_TUTORIAL_FINISHED: {
                    KEY: "shootTutorial",
                    DEFAULT_VALUE: !1
                },
                PLAYER_NAME: {
                    KEY: "playerName",
                    DEFAULT_VALUE: null
                }
            }, this.setDefaultValues()
        }
        var t, i, a;
        return t = e, (i = [{
            key: "setDefaultValues",
            value: function() {
                for (var e = Object.keys(this.STORAGE_KEYS), t = 0; t < e.length; t++) {
                    var i = this.STORAGE_KEYS[e[t]].KEY,
                        a = this.STORAGE_KEYS[e[t]].DEFAULT_VALUE;
                    null === this.storage.getItem(i, null) && this.storage.setItem(i, a)
                }
            }
        }, {
            key: "getValue",
            value: function(e) {
                return this.storage.getItem(e, null)
            }
        }, {
            key: "setValue",
            value: function(e, t) {
                this.storage.setItem(e, t)
            }
        }]) && d(t.prototype, i), a && d(t, a), e
    }();

    function y(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function v(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var _ = Object.freeze({
            radio: "radio",
            music: "music",
            muted: "muted"
        }),
        b = Object.freeze((v(m = {}, _.radio, "radio"), v(m, _.music, "default"), v(m, _.muted, "soundOff"), m)),
        w = function(e) {
            return b[e]
        },
        E = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, i, a;
            return t = e, a = [{
                key: "handleSoundButtonPress",
                value: function(t, i, a, n) {
                    e.cycleSoundState(t), e.updateSounds(t, a, n), e.updateSoundButtonState(t, i)
                }
            }, {
                key: "updateSoundButtonState",
                value: function(e, t) {
                    e.audioState === _.radio ? t.useState(w(_.radio)) : e.audioState === _.music ? t.useState(w(_.music)) : e.audioState === _.muted ? t.useState(w(_.muted)) : console.warn("unknown audio state")
                }
            }, {
                key: "cycleSoundState",
                value: function(e) {
                    e.audioState === _.radio ? e.audioState = _.music : e.audioState === _.music ? e.audioState = _.muted : e.audioState === _.muted ? e.audioState = _.radio : (console.warn("unknown audio state"), e.audioState = _.radio)
                }
            }, {
                key: "updateSounds",
                value: function(e, t, i) {
                    e.audioState === _.radio ? (e.sound.mute = !1, i.play(), t.stopMusic()) : e.audioState === _.music ? (e.sound.mute = !1, t.fadeToMusic("music", .35, 2e3), i.pause()) : e.audioState === _.muted ? (e.sound.mute = !0, t.stopMusic(), i.pause()) : console.warn("unknown audio state")
                }
            }], (i = null) && y(t.prototype, i), a && y(t, a), e
        }();

    function T(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var S = null,
        P = function() {
            function e(t, i) {
                var a = this,
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.game = t, this.url = i, this.onError = new Phaser.Signal, this._mutedInternal = !1, this._mutedGlobal = !1, S || (S = document.createElement("audio")), this.domElement = S, this.domElement.src = this.url, this.domElement.crossorigin = "anonymous", this.domElement.autoplay = n, this._errorHandler = function(e) {
                    a.onError.dispatch(e)
                }, this.domElement.addEventListener("error", this._errorHandler), this.game.sound.onMute.add(this.onGlobalMute, this), this.game.sound.onUnMute.add(this.onGlobalUnmute, this), this.game.sound.mute && (this.domElement.muted = !0, this._mutedGlobal = !0), document.body.append(this.domElement)
            }
            var t, i, a;
            return t = e, (i = [{
                key: "play",
                value: function() {
                    this.domElement.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.domElement.pause()
                }
            }, {
                key: "onGlobalMute",
                value: function() {
                    this._mutedGlobal = !0, this.domElement.muted = !0
                }
            }, {
                key: "onGlobalUnmute",
                value: function() {
                    this._mutedGlobal = !1, this._mutedInternal || (this.domElement.muted = !1)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.mute = !0
                }
            }, {
                key: "mute",
                get: function() {
                    return this.domElement.muted
                },
                set: function(e) {
                    this._mutedInternal = e, this._mutedGlobal || (this.domElement.muted = e)
                }
            }, {
                key: "volume",
                get: function() {
                    return this.domElement.volume
                },
                set: function(e) {
                    this.domElement.volume = e
                }
            }, {
                key: "error",
                get: function() {
                    return this.domElement.error
                }
            }]) && T(t.prototype, i), a && T(t, a), e
        }();

    function x(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var R = "https://radio.toggo.de/spielen/mp3-192/",
        k = function() {
            function e(t) {
                var i = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.game = t, this.musicCurrent = null, this.musicKeyCurrent = "", this.musicVolume = 1, this.fadeingMusic = !1, this.fadingOut = [], this.sfx = {}, this.attenuationRange = 30, window.fsToggleMusic = function() {
                    i.muteGameMusic()
                }, this.radioAudioStream = new P(this.game, R, this.game.audioState === _.radio), this.radioAudioStream.onError.addOnce((function(e) {
                    console.error("Error when starting radio stream", e)
                })), this.game.sound.context.addEventListener("statechange", (function() {
                    "running" === i.game.sound.context.state && i.radioAudioStream && i.game.audioState === _.radio && i.radioAudioStream.play()
                })), window.addEventListener("touchstart", (function() {
                    i.radioAudioStream && i.game.audioState === _.radio && i.radioAudioStream.play()
                }), {
                    once: !0
                })
            }
            var t, i, a;
            return t = e, (i = [{
                key: "updateListenerPosition",
                value: function(e) {
                    this.listenerPosition.copy(e)
                }
            }, {
                key: "getAttenuation",
                value: function(e) {
                    var t = this.listenerPosition.distanceTo(e);
                    if (t > this.attenuationRange) return 0;
                    var i = 1 - t / this.attenuationRange;
                    return i > .6 && (i = .6), i
                }
            }, {
                key: "setTargetMusicVolume",
                value: function(e, t) {
                    this.musicVolume = e, this.musicCurrent && (this.fadeingMusic = !0, this.musicCurrent.fadeInSpeed = 1 / (.001 * t))
                }
            }, {
                key: "_onDecodedMusic",
                value: function(e, t) {
                    this.musicCurrent && (this.musicCurrent.play("", 0, 0, !0), this.fadeingMusic = !0, this.musicCurrent.fadeInSpeed = 1 / (.001 * t))
                }
            }, {
                key: "muteGameMusic",
                value: function() {
                    this.musicCurrent && (this.musicCurrent.pause(), this.musicCurrent.stop(), this.musicCurrent.volume = 0, this.musicCurrent.paused = !0)
                }
            }, {
                key: "fadeToMusic",
                value: function(e, t, i) {
                    this.setTargetMusicVolume(t, i), this.musicKeyCurrent !== e && (this.musicKeyCurrent = e, this.musicCurrent && (this.musicCurrent.fadeOutSpeed = 1 / (.001 * i), this.fadingOut.push(this.musicCurrent)), e ? (this.musicCurrent = this.game.add.audio(e), this.musicCurrent.isDecoded ? this._onDecodedMusic(this.musicCurrent, i) : this.musicCurrent.onDecoded.add(this._onDecodedMusic, this, 0, i)) : this.musicCurrent = null)
                }
            }, {
                key: "stopMusic",
                value: function() {
                    this.musicCurrent && this.fadeToMusic(null, null, 1)
                }
            }, {
                key: "update",
                value: function(e) {
                    this.fadeingMusic && this.musicCurrent && (this.musicCurrent.volume < this.musicVolume ? (this.musicCurrent.volume += this.musicCurrent.fadeInSpeed * e, this.musicCurrent.volume >= this.musicVolume && (this.musicCurrent.volume = this.musicVolume, this.fadeingMusic = !1)) : (this.musicCurrent.volume -= this.musicCurrent.fadeInSpeed * e, this.musicCurrent.volume <= this.musicVolume && (this.musicCurrent.volume = this.musicVolume, this.fadeingMusic = !1)));
                    for (var t = 0; t < this.fadingOut.length; t++) {
                        var i = this.fadingOut[t];
                        i.isDecoded && (i.volume -= e * i.fadeOutSpeed, i.volume <= 0 && (i.stop(), i.destroy(), this.fadingOut.splice(t, 1), t--))
                    }
                }
            }, {
                key: "_onDecodedSfx",
                value: function(e, t, i, a) {
                    if (e.play("", 0, t, !1), e.usingWebAudio && i) {
                        var n = i;
                        n += a * Math.random() - .5 * a, e._sound.playbackRate.value = n
                    }
                }
            }, {
                key: "_onEndSfx",
                value: function(e) {
                    this.sfx[e.soundKey] || (this.sfx[e.soundKey] = []), this.sfx[e.soundKey].push(e)
                }
            }, {
                key: "playSfxAttenuated",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        n = arguments.length > 4 ? arguments[4] : void 0;
                    this.playSfx(e, this.getAttenuation(n) * t, i, a)
                }
            }, {
                key: "playSfx",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if (!e) return null;
                    if (0 === t) return null;
                    t > 1 && (t = 1);
                    var n = null;
                    if (this.sfx[e] && this.sfx[e].length > 0) n = this.sfx[e].pop();
                    else {
                        if (!(n = this.game.add.audio(e))) return console.log("Sound key:", e, "not found"), null;
                        n.soundKey = e, n.onStop.add(this._onEndSfx, this)
                    }
                    return n.isDecoded ? this._onDecodedSfx(n, t, i, a) : n.onDecoded.add(this._onDecodedSfx, this, 0, t, i, a), n
                }
            }, {
                key: "getSound",
                value: function(e, t) {
                    if (e && t) {
                        var i = this.game.add.audio(e);
                        i ? (i.soundKey = e, i.isDecoded ? t(i) : i.onDecoded.add(t, this)) : console.log("Sound key:", e, "not found")
                    } else console.log("SoundManager: Invalid sound key or missing callback")
                }
            }]) && x(t.prototype, i), a && x(t, a), e
        }(),
        I = i(4),
        O = i(159),
        C = i.n(O);

    function A(e) {
        return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function N(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function L(e, t) {
        return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function M(e, t, i) {
        return (M = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = B(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function B(e) {
        return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function j(e, t) {
        return (j = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var D = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), L(this, B(t).apply(this, arguments))
        }
        var i, a, r;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && j(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function() {
                M(B(t.prototype), "init", this).call(this, {
                    key: "base",
                    url: "data/basePack.json"
                })
            }
        }, {
            key: "createOnce",
            value: function() {
                var e = this;
                M(B(t.prototype), "createOnce", this).call(this), this.game.sc = C.a, this.game.onPause.add((function() {
                    e.game.lockRender = !0, e.game.sound.pauseAll()
                })), this.game.onResume.add((function() {
                    e.game.lockRender = !1, e.game.sound.resumeAll()
                })), this.game.cache.checkLayoutKey("layout_preload") && (this.game.preloadLayout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_preload"))), this.game.config.enableDebug && (this.game.DEBUG = !0, this.game.DEBUG_NETWORK = !1, this.game.DEBUG_PRETEND_MOBILE = !1, this.game.DEBUG_SKIP_LOGIN = !1, this.game.DEBUG_SKIP_TUTORIAL = !0, window.game = this.game), n.a.Util.isProbablyIPadDesktopMode() && (this.game.device.desktop = !1), this.game.device.iOS && (this.game.DEBUG && (this.game.debug.extraText += "\niOS"), window.addEventListener("touchstart", (function() {
                    e.game.focusGain()
                }))), document.body.classList.remove("loading"), this.game.gameConfig = I.config, this.game.toggoApi = new s.a(I.config.toggoKey, I.config.toggoAdInterval, I.config.toggoAdInterval), this.game.gameUtils = new l(this.game), this.game.audioState = _.radio, this.game.soundManager = new k(this.game), this.game.storageManager = new f(this.game), this.game.storeKeys = this.game.storageManager.STORAGE_KEYS
            }
        }, {
            key: "create",
            value: function() {
                var e = this;
                M(B(t.prototype), "create", this).call(this), this.game.cm = new g(this.game), this.game.cm.connect((function() {
                    e.game.DEBUG_NETWORK && console.log("Connected"), e.game.cm.connectedOnce = !0, e.game.state.start("nameInput")
                }))
            }
        }]) && N(i.prototype, a), r && N(i, r), t
    }(n.a.State.Base);

    function W(e) {
        return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function F(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function U(e, t) {
        return !t || "object" !== W(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function G(e, t, i) {
        return (G = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = H(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function H(e) {
        return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function V(e, t) {
        return (V = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var K = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), U(this, H(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && V(e, t)
        }(t, e), i = t, (a = [{
            key: "preload",
            value: function() {
                G(H(t.prototype), "preload", this).call(this), this.game.localizer.initGroup(this.game.preloadLayout), this.label = this.game.preloadLayout.getElementById("varImageBar")
            }
        }, {
            key: "loadUpdate",
            value: function() {
                for (var e, i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                (e = G(H(t.prototype), "loadUpdate", this)).call.apply(e, [this].concat(a)), this.label.scale.x = this.game.load.progress / 100
            }
        }, {
            key: "create",
            value: function() {
                G(H(t.prototype), "create", this).call(this)
            }
        }]) && F(i.prototype, a), n && F(i, n), t
    }(n.a.State.Base);

    function z(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Y = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.maxNameLength = 14
        }
        var t, i, a;
        return t = e, (i = [{
            key: "createUI",
            value: function(e, t) {
                var i = this;
                this.playerName = e, this.confirmCallback = t, this.textChangePollTime = 0, this.textChangePollTimeLength = .1, this.lastText = "", this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_nameInput")), this.layout.setup(), this.game.world.add(this.layout), this.game.localizer.initGroup(this.layout);
                var a = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, a), a.onInputUp.add((function() {
                    return E.handleSoundButtonPress(i.game, a, i.game.soundManager, i.game.soundManager.radioAudioStream)
                })), this.errorMessage = this.layout.getElementById("varTextErrorInput"), this.errorMessage.visible = !1, this.buttonContinue = this.layout.getElementById("button_1"), this.buttonContinue.onInputUp.add((function() {
                    i.confirmCallback()
                })), this.buttonContinue.visible = !1, this.game.add.tween(this.buttonContinue.scale).to({
                    x: .6,
                    y: .6
                }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.inputField = this.layout.getElementById("input_1");
                var n = this.game.localizer._getMsg("__name").message;
                this.inputField.shui.inputField.placeHolder.text = n, this._validNameLength(this.playerName) && this.inputField.children[0].setText(this.playerName), this.game.gameUtils.attachButtonSoundTraverse(this.game.world, (function() {
                    i.game.soundManager.playSfx("button", 1, 1, .3)
                }))
            }
        }, {
            key: "update",
            value: function(e) {
                if (this.layout) {
                    this.textChangePollTime -= e, this.textChangePollTime < 0 && (this.textChangePollTime = this.textChangePollTimeLength, this.inputField.children[0].value !== this.lastText && (this.lastText = this.inputField.children[0].value, this.onTextChange()));
                    var t = 5 * e;
                    !this.game.device.desktop && PhaserInput.KeyboardOpen ? this.layout.position.y = this.layout.position.y * (1 - t) + .2 * -this.game.height * t : this.layout.position.y = 0
                }
            }
        }, {
            key: "onTextChange",
            value: function() {
                this.buttonContinue.visible = !0, this.playerName = this.inputField.shui.inputField.value, this.playerName.length > this.maxNameLength && (this.playerName = this.playerName.slice(0, this.maxNameLength), this.inputField.children[0].setText(this.playerName)), this._validNameLength(this.playerName) ? this.buttonContinue.visible = !0 : this.buttonContinue.visible = !1
            }
        }, {
            key: "_validNameLength",
            value: function(e) {
                return !!e && e.length > 0 && e.length <= this.maxNameLength
            }
        }, {
            key: "resize",
            value: function() {}
        }]) && z(t.prototype, i), a && z(t, a), e
    }();

    function Z(e) {
        return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function X(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function q(e, t) {
        return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function J(e, t, i) {
        return (J = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Q(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function Q(e) {
        return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function $(e, t) {
        return ($ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ee = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), q(this, Q(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && $(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function() {
                J(Q(t.prototype), "init", this).call(this, {
                    key: "menuState",
                    url: "data/menuPack.json"
                })
            }
        }, {
            key: "createOnce",
            value: function() {
                J(Q(t.prototype), "createOnce", this).call(this), this.nameUI = new Y(this.game)
            }
        }, {
            key: "create",
            value: function() {
                if (J(Q(t.prototype), "create", this).call(this), this.game.DEBUG_SKIP_LOGIN && this.game.cm.connectionStatus === this.game.cm.status.DISCONNECTED) return this.nameUI.playerName = "name_".concat(Math.floor(1e3 * Math.random())), void this.attemptLogin();
                this.game.toggoApi.track("namenseingabe");
                var e = this.game.storageManager.getValue(this.game.storeKeys.PLAYER_NAME.KEY);
                this.nameUI.createUI(e, this.attemptLogin.bind(this))
            }
        }, {
            key: "attemptLogin",
            value: function() {
                this.game.cm.login(this.nameUI.playerName, "pass", this._onLogin.bind(this))
            }
        }, {
            key: "_onLogin",
            value: function() {
                this.game.storageManager.setValue(this.game.storeKeys.PLAYER_NAME.KEY, this.nameUI.playerName), this.game.state.start("menu")
            }
        }, {
            key: "update",
            value: function(e) {
                J(Q(t.prototype), "update", this).call(this, e);
                var i = this.game.time.elapsedMS / 1e3;
                i > .1 && (i = .1), this.game.soundManager.update(i), this.nameUI && this.nameUI.update(i)
            }
        }, {
            key: "resize",
            value: function() {
                J(Q(t.prototype), "resize", this).call(this), this.nameUI && this.nameUI.resize()
            }
        }, {
            key: "shutdown",
            value: function() {
                J(Q(t.prototype), "shutdown", this).call(this)
            }
        }]) && X(i.prototype, a), n && X(i, n), t
    }(K);

    function te(e) {
        return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ie(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function ae(e, t) {
        return !t || "object" !== te(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ne(e, t, i) {
        return (ne = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = oe(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function oe(e) {
        return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function se(e, t) {
        return (se = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var re = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), ae(this, oe(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && se(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    i = {
                        key: "menuState",
                        url: "data/menuPack.json"
                    };
                ne(oe(t.prototype), "init", this).call(this, i), this.showNameInput = e
            }
        }, {
            key: "createOnce",
            value: function() {
                ne(oe(t.prototype), "createOnce", this).call(this)
            }
        }, {
            key: "create",
            value: function() {
                ne(oe(t.prototype), "create", this).call(this), this.game.stage.disableVisibilityChange = !1, this.game.toggoApi.track("menue"), this._createUI()
            }
        }, {
            key: "_createUI",
            value: function() {
                var e = this;
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_start")), this.layout.setup(), this.game.world.add(this.layout), this.game.localizer.initGroup(this.layout), this.layout.getElementById("buttonPlay").onInputUp.add((function() {
                    e.game.state.start("characterSelection")
                }));
                var t = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, t), t.onInputUp.add((function() {
                    return E.handleSoundButtonPress(e.game, t, e.game.soundManager, e.game.soundManager.radioAudioStream)
                })), this.game.gameUtils.attachButtonSoundTraverse(this.layout, (function() {
                    e.game.soundManager.playSfx("button")
                }))
            }
        }, {
            key: "update",
            value: function(e) {
                ne(oe(t.prototype), "update", this).call(this, e);
                var i = this.game.time.elapsedMS / 1e3;
                i > .1 && (i = .1), this.game.soundManager.update(i)
            }
        }, {
            key: "resize",
            value: function() {
                ne(oe(t.prototype), "resize", this).call(this)
            }
        }, {
            key: "shutdown",
            value: function() {
                ne(oe(t.prototype), "shutdown", this).call(this)
            }
        }]) && ie(i.prototype, a), n && ie(i, n), t
    }(K);

    function le(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var he = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.dimmer = new Phaser.Graphics(this.game, 0, 0), i ? i.add(this.dimmer) : this.game.world.add(this.dimmer), this.dimmer.beginFill("0xffffff"), this.dimmer.tint = 0, this.dimmer.drawRect(0, 0, 1, 1), this.dimmer.endFill(), this.dimmer.width = this.game.width, this.dimmer.height = this.game.height, this.dimmer.alpha = 1, this.dimmer.visible = !1, this.dimmer.inputEnabled = !1, this.tween = null
        }
        var t, i, a;
        return t = e, (i = [{
            key: "fadeIn",
            value: function(e, t) {
                var i = this;
                this.tween && this.tween.stop(), this.dimmer.visible = !0, this.dimmer.alpha = 1, this.tween = this.game.add.tween(this.dimmer).to({
                    alpha: 0
                }, e, Phaser.Easing.Linear.None, !0, 250, 0, !1), this.tween.onComplete.add((function() {
                    i.dimmer.visible = !1
                })), t && this.tween.onComplete.add(t)
            }
        }, {
            key: "setFadeColor",
            value: function(e) {
                this.dimmer.tint = e
            }
        }, {
            key: "fadeOut",
            value: function(e, t) {
                this.tween && this.tween.stop(), this.dimmer.visible = !0, this.dimmer.alpha = 0, this.tween = this.game.add.tween(this.dimmer).to({
                    alpha: 1
                }, e, Phaser.Easing.Linear.None, !0, 250, 0, !1), t && this.tween.onComplete.add(t)
            }
        }, {
            key: "resize",
            value: function() {
                this.dimmer.width = this.game.width, this.dimmer.height = this.game.height
            }
        }]) && le(t.prototype, i), a && le(t, a), e
    }();

    function ce(e) {
        return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ue(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function pe(e, t) {
        return !t || "object" !== ce(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ge(e, t, i) {
        return (ge = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = de(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function de(e) {
        return (de = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function me(e, t) {
        return (me = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var fe = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), pe(this, de(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && me(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function() {
                ge(de(t.prototype), "init", this).call(this, {
                    key: "menuState",
                    url: "data/menuPack.json"
                })
            }
        }, {
            key: "create",
            value: function() {
                var e = this;
                ge(de(t.prototype), "create", this).call(this), this.game.toggoApi.track("charakter-auswahl"), this.createUI(), this.fadeUI = new he(this.game), this.game.gameUtils.attachButtonSoundTraverse(this.layout, (function() {
                    e.game.soundManager.playSfx("button", .7, 1, .2)
                }));
                var i = this.game.time.create(!0);
                i.add(750, (function() {
                    e.game.toggoApi.showMidRoll()
                })), i.start()
            }
        }, {
            key: "createUI",
            value: function() {
                var e = this;
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_character")), this.layout.setup(), this.game.localizer.initGroup(this.layout), this.game.world.add(this.layout);
                var t = this.layout.getElementById("buttonSharko");
                t.onInputUp.add((function(t, i, a) {
                    a && (e.game.soundManager.playSfx("sel_Sharko", 1), e.onCharSelect(e.game.gameConfig.character.SHARKO.key))
                }));
                var i = this.layout.getElementById("buttonZig");
                i.onInputUp.add((function(t, i, a) {
                    a && (e.game.soundManager.playSfx("sel_Zig", 1), e.onCharSelect(e.game.gameConfig.character.ZIG.key))
                }));
                var a = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, a), a.onInputUp.add((function() {
                    return E.handleSoundButtonPress(e.game, a, e.game.soundManager, e.game.soundManager.radioAudioStream)
                })), this.onCharSelect = function(a) {
                    e.game.gameConfig.character.SHARKO.key, t.inputEnabled = !1, i.inputEnabled = !1, e.game.toggoApi.track("play"), e.fadeUI.fadeOut(1500), e.game.time.events.add(1500, (function() {
                        e.game.playerCharacter = a, e.game.state.start("game")
                    }), e)
                }
            }
        }, {
            key: "update",
            value: function() {
                ge(de(t.prototype), "update", this).call(this);
                var e = this.game.time.elapsedMS / 1e3;
                e > .1 && (e = .1), this.game.soundManager.update(e)
            }
        }, {
            key: "resize",
            value: function() {
                ge(de(t.prototype), "resize", this).call(this), this.fadeUI.resize()
            }
        }]) && ue(i.prototype, a), n && ue(i, n), t
    }(K);

    function ye(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var ve = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.camera = this.game.camera
        }
        var t, i, a;
        return t = e, (i = [{
            key: "init",
            value: function() {
                this.currentCenterPoint = new Phaser.Point, this.resize(), this.states = {
                    INTRO: "INTRO",
                    PAN: "PAN",
                    FOLLOW: "FOLLOW",
                    FREEZE: "FREEZE",
                    FREE: "FREE"
                }, this.state = this.states.FREE, this.followTarget = null, this.followCurrent = new Phaser.Point, this.panTarget = new Phaser.Point, this.panCurrent = new Phaser.Point, this.panSpeed = 1, this.zoomTarget = 1, this.zoomPan = !1, this.panLast = new Phaser.Point, this.lockPlayerInput = !1, this.resize()
            }
        }, {
            key: "update",
            value: function(e) {
                switch (this.state) {
                    case this.states.PAN:
                        this.panCurrent.lerp(this.panTarget, Math.min(this.panSpeed * e * 2, 1));
                        var t = !1;
                        if (this.panLast.x === this.camera.x && this.panLast.y === this.camera.y && (t = !0), this.zoomPan) {
                            var i = Phaser.Math.linear(this.camera.scale.x, this.zoomTarget, e) - this.camera.scale.x;
                            this.zoomCamera(i), Math.abs(i) > .001 && (t = !1)
                        }
                        if (this.centerCameraOn(this.panCurrent), this.panLast.copyFrom(this.camera), (this.panCurrent.distance(this.panTarget) < 25 || t) && (this.state = this.states.FREE, this.panCB)) {
                            var a = this.panCB;
                            this.panCB = null, a()
                        }
                        break;
                    case this.states.FOLLOW:
                        this.followCurrent.lerp(this.followTarget, Math.min(5 * e, 1)), this.centerCameraOn(this.followCurrent);
                        break;
                    case this.states.FREEZE:
                        break;
                    case this.states.FREE:
                        this.lockPlayerInput
                }
            }
        }, {
            key: "_updateCameraMove",
            value: function(e) {
                var t = this.game.input.keyboard;
                (t.isDown(Phaser.Keyboard.A) || t.isDown(Phaser.Keyboard.LEFT)) && (this.camera.x -= 500 * e), (t.isDown(Phaser.Keyboard.D) || t.isDown(Phaser.Keyboard.RIGHT)) && (this.camera.x += 500 * e), (t.isDown(Phaser.Keyboard.W) || t.isDown(Phaser.Keyboard.UP)) && (this.camera.y -= 500 * e), (t.isDown(Phaser.Keyboard.S) || t.isDown(Phaser.Keyboard.DOWN)) && (this.camera.y += 500 * e), t.isDown(Phaser.Keyboard.Q) && this.zoomCamera(e), t.isDown(Phaser.Keyboard.E) && this.zoomCamera(-e)
            }
        }, {
            key: "zoomCamera",
            value: function(e) {
                var t = {
                    x: 0,
                    y: 0
                };
                this.getCameraCurrentCenter(t), this.camera.scale.x += e, this.camera.scale.y += e, this.camera.scale.x > 1.2 && (this.camera.scale.x = 1.2, this.camera.scale.y = 1.2), this._clampCameraScale(), this.centerCameraOn(t)
            }
        }, {
            key: "getCameraCurrentCenter",
            value: function(e) {
                e.x = (this.camera.x + .5 * this.camera.view.width) / this.camera.scale.x, e.y = (this.camera.y + .5 * this.camera.view.height) / this.camera.scale.y
            }
        }, {
            key: "_clampCameraScale",
            value: function() {
                var e = this.camera;
                if (e.view.width * (1 / e.scale.x) > e.bounds.width) {
                    var t = 1 / (e.bounds.width / e.view.width);
                    e.scale.set(t, t)
                }
                if (e.view.height * (1 / e.scale.y) > e.bounds.height) {
                    var i = 1 / (e.bounds.height / e.view.height);
                    e.scale.set(i, i)
                }
                this.game.groups.ui.scale.set(1 / e.scale.x, 1 / e.scale.y)
            }
        }, {
            key: "centerCameraOn",
            value: function(e) {
                this.camera.x = e.x * this.camera.scale.x - .5 * this.camera.view.width, this.camera.y = e.y * this.camera.scale.y - .5 * this.camera.view.height, this.currentCenterPoint.copyFrom(e)
            }
        }, {
            key: "resize",
            value: function() {
                var e = this.camera,
                    t = (this.game.gameConfig, this.game.gameState.arena.lengthTotal);
                e.bounds.setTo(-50, -t, t + 50, t), e.view.setTo(0, -this.game.height, this.game.width, this.game.height), this.currentCenterPoint && this.centerCameraOn(this.currentCenterPoint)
            }
        }, {
            key: "setToDefault",
            value: function() {
                var e = this.camera;
                e.scale.set(1, 1), e.bounds.setTo(0, 0, this.game.width, this.game.height), e.view.setTo(0, 0, this.game.width, this.game.height)
            }
        }, {
            key: "setPlayerInputLock",
            value: function(e) {
                this.lockPlayerInput = e
            }
        }, {
            key: "panTo",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                this.panCB = n, this.state = this.states.PAN, this.getCameraCurrentCenter(this.panCurrent), this.panTarget.set(e, t), this.panSpeed = i, this.panLast.set(0, 0), a ? (this.zoomTarget = a, this.zoomPan = !0) : this.zoomPan = !1
            }
        }, {
            key: "follow",
            value: function(e) {
                this.state = this.states.FOLLOW, this.getCameraCurrentCenter(this.followCurrent), this.followTarget = e
            }
        }, {
            key: "moveCamera",
            value: function(e, t) {
                this.camera.x += e, this.camera.y += t
            }
        }]) && ye(t.prototype, i), a && ye(t, a), e
    }();

    function _e(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function be(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var we = function() {
        function e(t) {
            var i;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.animation = {
                SPLASH: "SPLASH",
                BURST: "BURST"
            }, this.animFrames = (_e(i = {}, this.animation.SPLASH, ["splash_00", "splash_01", "splash_02", "splash_03", "splash_04", "splash_05", "splash_06", "splash_07", "splash_08", "splash_09"]), _e(i, this.animation.BURST, ["burst_00", "burst_01", "burst_02", "burst_03", "burst_04"]), i), this.activeAnimations = [], this.particleKeys = ["particle_01", "particle_02", "particle_03", "particle_04"], this.particles = []
        }
        var t, i, a;
        return t = e, (i = [{
            key: "playAnimation",
            value: function(e, t) {
                t /= 1e3;
                var i = this.animFrames[e],
                    a = new Phaser.Sprite(this.game, 0, 0, "anim", i[0]);
                return a.anchor.set(.5, .5), this.game.groups.foreground.add(a), a.animIndex = 0, a.animTimerLength = t, a.animTimer = t, a.animFrames = i, this.activeAnimations.push(a), a
            }
        }, {
            key: "update",
            value: function(e) {
                for (var t = 0; t < this.activeAnimations.length; t++) {
                    var i = this.activeAnimations[t];
                    i.animTimer -= e, i.animTimer > 0 || (i.animTimer = i.animTimerLength, i.animIndex++, i.animIndex >= i.animFrames.length ? (this.activeAnimations.splice(t, 1), i.parent.remove(i), t--) : i.frameName = i.animFrames[i.animIndex])
                }
                for (var a = 0; a < this.particles.length; a++) {
                    var n = this.particles[a];
                    n.vel.x += 2 * this.game.windSpeed * e, n.position.x += e * n.vel.x, n.gravity && (n.vel.y += 550 * e), n.position.y += e * n.vel.y;
                    var o = !1;
                    if (n.ttl && n.ttl > 0) {
                        n.ttl -= e;
                        var s = 1 - n.ttl / n.ttlStart;
                        s *= s, n.alpha = 1 - s, n.ttl <= 0 && (o = !0)
                    }
                    o || n.position.y > 20 ? (this.particles.splice(a, 1), a--, n.parent.remove(n)) : n.rotation += n.vel.x * e * .05 * n.rotationFactor
                }
            }
        }, {
            key: "spawnParticles",
            value: function(e, t, i) {
                for (var a = 0; a < i; a++) {
                    var n = this.particleKeys[Math.floor(Math.random() * this.particleKeys.length)],
                        o = new Phaser.Sprite(this.game, e, t, "fx", n);
                    this.game.groups.game.add(o), o.anchor.set(.5), o.vel = new Phaser.Point(200 * (Math.random() - .5) * 2, -300 * Math.random() - 200), o.rotation = Math.random() * Math.PI, o.scale.set(1 + Math.random(), 1 + Math.random()), o.rotationFactor = Math.random(), o.gravity = !0, this.particles.push(o)
                }
            }
        }, {
            key: "spawnUnlockParticles",
            value: function(e, t, i) {
                for (var a = 0; a < i; a++) {
                    var n = "unlock_0".concat(Math.floor(2 * Math.random()) + 1),
                        o = new Phaser.Sprite(this.game, e, t, "fx", n);
                    this.game.groups.game.add(o), o.anchor.set(.5), o.vel = new Phaser.Point(Math.random() - .5, Math.random() - .5), o.vel.normalize(), o.vel.x *= 50 + 50 * Math.random(), o.vel.y *= 50 + 50 * Math.random(), o.rotation = Math.random() * Math.PI;
                    var s = 1 + 2 * Math.random();
                    o.scale.set(s, s), o.rotationFactor = Math.random(), o.gravity = !1, o.ttlStart = 2, o.ttl = o.ttlStart, this.particles.push(o)
                }
            }
        }, {
            key: "clearParticles",
            value: function() {
                for (var e = 0; e < this.particles.length; e++) {
                    var t = this.particles[e];
                    this.particles.splice(e, 1), e--, t.parent.remove(t)
                }
            }
        }]) && be(t.prototype, i), a && be(t, a), e
    }();

    function Ee(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Te = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, i, a;
        return t = e, a = [{
            key: "clamp",
            value: function(e, t, i) {
                return e < t ? t : e > i ? i : e
            }
        }, {
            key: "lerp",
            value: function(e, t, i) {
                return e + (t - e) * (i = (i = i < 0 ? 0 : i) > 1 ? 1 : i)
            }
        }, {
            key: "interpolateWithCurve",
            value: function(e, t, i, a, n) {
                return e + (t - e) * a.call(n, i)
            }
        }, {
            key: "gaussianRandom",
            value: function() {
                for (var e = 0, t = 0; t < 6; t += 1) e += Math.random();
                return e / 6
            }
        }], (i = null) && Ee(t.prototype, i), a && Ee(t, a), e
    }();

    function Se(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Pe = function() {
        function e(t, i) {
            var a = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.playerLand = i, this._createUI(), this._setUpStart(), this.oldMoney = 0, this.weaponTypes = this.game.gameConfig.weaponType, this.lastBestUnlock = this.weaponTypes.SLING, window.setGameUiVisibility = function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                a && a.game.gameState && (a.game.groups.ui.visible = e)
            }
        }
        var t, i, a;
        return t = e, (i = [{
            key: "_createUI",
            value: function() {
                var e = this;
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_game")), this.layout.setup(), this.game.localizer.initGroup(this.layout), this.game.groups.ui.add(this.layout);
                var t = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, t), t.onInputUp.add((function() {
                    return E.handleSoundButtonPress(e.game, t, e.game.soundManager, e.game.soundManager.radioAudioStream)
                })), this.buttonWeapon = this.layout.getElementById("buttonWeapon"), this.textScore = this.layout.getElementById("textCoin"), this.textScoreValue = this.layout.getElementById("varTextCoins"), this.textRoundCount = this.layout.getElementById("varTextRound"), this.lblWindIndicator = this.layout.getElementById("varImageWind"), this.textChooseYourWeapon = this.layout.getElementById("textChooseWeapon"), this.lblTimerBarBackground = this.layout.getElementById("timebarBG"), this.lblTimerBarFill = this.layout.getElementById("timebarFill"), this.textsCoundown = [this.layout.getElementById("textCountdownGo"), this.layout.getElementById("textCountdown01"), this.layout.getElementById("textCountdown02"), this.layout.getElementById("textCountdown03")], this.lblPositionIndicatorArrow = this.layout.getElementById("positionIndicatorArrow"), this.textPositionIndicatorArrow = this.layout.getElementById("textPosition"), this.groupPositionIndicator = this.layout.getElementById("positionIndicator"), this.groupPositionIndicator.defaultPosition = this.groupPositionIndicator.shui.position.clone(), this.groupPositionIndicator.defaultPosition.y += 30, this.textsFeedbackHit = {
                    PERFECT_HIT: this.layout.getElementById("varTextBigHit"),
                    HIT: this.layout.getElementById("varTextHit"),
                    BAD_HIT: this.layout.getElementById("varTextBadHit"),
                    MISS: this.layout.getElementById("varTextMiss")
                }, this.textWin = this.layout.getElementById("textWin"), this.textLose = this.layout.getElementById("textLose"), this.buttonZoomIn = this.layout.getElementById("buttonZoomIn"), this.buttonZoomIn.onInputUp.add((function() {
                    e.buttonZoomIn._isDown = !1
                })), this.buttonZoomIn.onInputDown.add((function() {
                    e.buttonZoomIn._isDown = !0
                })), this.buttonZoomOut = this.layout.getElementById("buttonZoomOut"), this.buttonZoomOut.onInputUp.add((function() {
                    e.buttonZoomOut._isDown = !1
                })), this.buttonZoomOut.onInputDown.add((function() {
                    e.buttonZoomOut._isDown = !0
                })), this.buttonZoomReturn = this.layout.getElementById("buttonZoomReturn"), this.buttonZoomReturn.onInputUp.add((function(t, i, a) {
                    a && e.game.gameState.weaponUI.open()
                })), this.game.gameUtils.attachButtonSoundTraverse(this.layout, (function() {
                    e.game.soundManager.playSfx("button", .7, 1, .2)
                }))
            }
        }, {
            key: "_setUpStart",
            value: function() {
                this.textChooseYourWeapon.visible = !1, this.textScoreValue.text = "0";
                for (var e = 0; e < this.textsCoundown.length; e++) this.textsCoundown[e].visible = !1;
                this.textsFeedbackHit.PERFECT_HIT.visible = !1, this.textsFeedbackHit.HIT.visible = !1, this.textsFeedbackHit.BAD_HIT.visible = !1, this.textsFeedbackHit.MISS.visible = !1, this.lblTimerBarBackground.visible = !1, this.lblTimerBarFill.visible = !1, this.groupPositionIndicator.visible = !0, this.textWin.visible = !1, this.textLose.visible = !1, this.setRoundText(1), this.buttonWeapon.visible = !1, this.buttonZoomIn.visible = !1, this.buttonZoomOut.visible = !1, this.buttonZoomReturn.visible = !1
            }
        }, {
            key: "setRoundText",
            value: function(e) {
                this.textRoundCount.shui.locale.values.roundCount = e, this.textRoundCount.shui.locale.format()
            }
        }, {
            key: "update",
            value: function(e) {
                var t = this.playerLand.character.money;
                this.textScoreValue.text = t.toString(), this.buttonZoomIn._isDown && this.game.gameState.cameraManager.zoomCamera(e), this.buttonZoomOut._isDown && this.game.gameState.cameraManager.zoomCamera(-e);
                var i = "wind";
                Math.abs(this.game.windSpeedLerp) <= this.game.sc.windValues[0].speed + 5 ? i += "Still" : (this.game.windSpeedLerp > 0 ? i += "Right" : i += "Left", Math.abs(this.game.windSpeedLerp) <= this.game.sc.windValues[1].speed ? i += "_02" : i += "_03"), this.lblWindIndicator.frameName = i
            }
        }, {
            key: "setActiveTimeBar",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.lblTimerBarBackground.visible = e, this.lblTimerBarFill.visible = e
            }
        }, {
            key: "setTimeBarValue",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.lblTimerBarFill.scale.x = e
            }
        }, {
            key: "setActiveCountdown",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                this.textsCoundown.forEach((function(e) {
                    e.visible = !1
                })), !0 === e && this.setCountdownValue(t)
            }
        }, {
            key: "setCountdownValue",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.textsCoundown.forEach((function(e) {
                    e.visible = !1
                }));
                var t = Math.floor(Te.clamp(e, 0, this.textsCoundown.length - 1));
                this.textsCoundown[t].visible = !0
            }
        }, {
            key: "setActiveChooseYourWeapon",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.textChooseYourWeapon.visible = e
            }
        }, {
            key: "showHitText",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    a = null;
                0 === t ? a = this.game.gameUtils.copyShuiElement(this.textsFeedbackHit.BAD_HIT) : 1 === t ? (a = this.game.gameUtils.copyShuiElement(this.textsFeedbackHit.HIT)).text += " +".concat(i) : 2 === t ? (a = this.game.gameUtils.copyShuiElement(this.textsFeedbackHit.HIT)).text += " +".concat(i) : 3 === t ? (a = this.game.gameUtils.copyShuiElement(this.textsFeedbackHit.PERFECT_HIT)).text += " +".concat(i) : 4 === t && (a = this.game.gameUtils.copyShuiElement(this.textsFeedbackHit.MISS)), a.anchor.set(.5, 1), this.game.groups.foreground.addChild(a), a.shui.position.copyFrom(e), a.shui.position.y -= 40, a.shui.align.set(0, 0), this.game.add.tween(a.shui.position).to({
                    y: a.shui.position.y - 150
                }, 3e3, Phaser.Easing.Cubic.In, !0, 0, 0, !1), a.scale.y = 0, this.game.add.tween(a.scale).to({
                    y: 1
                }, 500, Phaser.Easing.Bounce.Out, !0, 0, 0, !1);
                var n = this.game.add.tween(a).to({
                    alpha: 0
                }, 1e3, Phaser.Easing.Linear.None, !0, 1e3, 0, !1);
                n.onComplete.add((function() {
                    a.parent.remove(a)
                }))
            }
        }, {
            key: "showPositionIndicator",
            value: function() {
                var e = this;
                if (!this.positionIndicatorTween) {
                    var t = this.playerLand.character.getCharacterWorld(),
                        i = this.game.gameState.arena.getPointXBetweenPlayers(),
                        a = (t.x - i) * this.game.camera.scale.x;
                    this.groupPositionIndicator.shui.position.x += a, this.groupPositionIndicator.shui.position.y -= this.game.camera.height, this.groupPositionIndicator.scale.set(1, 1), this.positionIndicatorTween = this.game.add.tween(this.groupPositionIndicator.shui.position).to({
                        y: this.groupPositionIndicator.defaultPosition.y
                    }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1), this.positionIndicatorTween.onComplete.add((function() {
                        e.positionIndicatorTween = e.game.add.tween(e.groupPositionIndicator.scale).to({
                            x: 1.05,
                            y: 1.05
                        }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0)
                    }))
                }
            }
        }, {
            key: "hidePositionIndicator",
            value: function() {
                var e = this;
                this.positionIndicatorHideTween || (this.positionIndicatorHideTween = this.game.add.tween(this.lblPositionIndicatorArrow).to({
                    alpha: 0
                }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1), this.positionIndicatorHideTween.onUpdateCallback((function() {
                    e.textPositionIndicatorArrow.alpha = e.lblPositionIndicatorArrow.alpha
                })), this.positionIndicatorHideTween.onComplete.add((function() {
                    e.groupPositionIndicator.visible = !1, e.lblPositionIndicatorArrow.alpha = 1, e.textPositionIndicatorArrow.alpha = 1, e.positionIndicatorHideTween = null, e.positionIndicatorTween && (e.positionIndicatorTween.stop(), e.positionIndicatorTween = null, e.groupPositionIndicator.scale.set(1, 1))
                })))
            }
        }, {
            key: "showGameOverText",
            value: function(e) {
                var t = null;
                (t = e ? this.textWin : this.textLose).alpha = 0, t.visible = !0, this.game.add.tween(t).to({
                    alpha: 1
                }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1)
            }
        }, {
            key: "showDisconnectText",
            value: function() {
                this.textWin.shui.locale.changeMessage("__opponent_disconnect"), this.textWin.shui.locale.format(), this.showGameOverText(!0), this.textChooseYourWeapon.visible = !1, this.lblTimerBarBackground.visible = !1, this.lblTimerBarFill.visible = !1, this.groupPositionIndicator.visible = !1
            }
        }]) && Se(t.prototype, i), a && Se(t, a), e
    }();

    function xe(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Re = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.lobbySetupCallback = i, this.startGameCallbackFired = !1, this._createUI(), this._setUpLobby(this.lobbySetupCallback)
        }
        var t, i, a;
        return t = e, (i = [{
            key: "_createUI",
            value: function() {
                var e = this;
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_lobby")), this.layout.setup(), this.game.world.add(this.layout), this.game.localizer.initGroup(this.layout);
                var t = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, t), t.onInputUp.add((function() {
                    return E.handleSoundButtonPress(e.game, t, e.game.soundManager, e.game.soundManager.radioAudioStream)
                })), this.txtLookingFor = this.layout.getElementById("varTextLobbyHead"), this.txtPlayerName = this.layout.getElementById("varTextPlayer01"), this.txtEnemyName = this.layout.getElementById("varTextPlayer02"), this.p1Zig = this.layout.getElementById("zig_default_1"), this.p1Zig.visible = !1, this.p1Sharko = this.layout.getElementById("sharko_cheer_1"), this.p1Sharko.visible = !1, this.p2ZigSilhouette = this.layout.getElementById("zig_silhouette_01"), this.p2ZigSilhouette.visible = !1, this.p2Zig = this.layout.getElementById("zig_silhouette_02"), this.p2Zig.visible = !1, this.p2SharkoSilhouette = this.layout.getElementById("sharko_silhouette_02"), this.p2SharkoSilhouette.visible = !1, this.p2Sharko = this.layout.getElementById("sharko_silhouette_01"), this.p2Sharko.visible = !1, this.lblVS = this.layout.getElementById("textVS"), this.imgLoadingBall = this.layout.getElementById("loadingBall_1")
            }
        }, {
            key: "_setUpLobby",
            value: function(e) {
                var t = this;
                this.game.playerCharacter === this.game.gameConfig.character.ZIG.key ? (this.lblPlayer = this.p1Zig, this.lblEnemySilhouette = this.p2SharkoSilhouette, this.lblEnemy = this.p2Sharko, this.txtLookingFor.shui.locale.changeMessage("__waitSharko"), this.txtLookingFor.shui.locale.format()) : (this.lblPlayer = this.p1Sharko, this.lblEnemySilhouette = this.p2ZigSilhouette, this.lblEnemy = this.p2Zig, this.txtLookingFor.shui.locale.changeMessage("__waitZig"), this.txtLookingFor.shui.locale.format()), this.lblPlayer.visible = !0, this.lblEnemySilhouette.visible = !0, this.txtPlayerName.setText(this.game.cm.loginName), this.txtEnemyName.visible = !1, this.lblVS.scale.set(0, 0), this.game.add.tween(this.lblVS.scale).to({
                    x: 1,
                    y: 1
                }, 1e3, Phaser.Easing.Back.Out, !0).onComplete.add((function() {
                    t.game.add.tween(t.lblVS.scale).to({
                        x: 1.2,
                        y: 1.2
                    }, 1500, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), e && e()
                }))
            }
        }, {
            key: "onEnemyFound",
            value: function(e) {
                var t = this;
                this.waitingForEnemy = !1, this.txtEnemyName.setText(this.game.cm.enemyName), [this.txtEnemyName, this.lblEnemy].forEach((function(i) {
                    i.alpha = 0, i.visible = !0, t.game.add.tween(i).to({
                        alpha: 1
                    }, 2e3, Phaser.Easing.Back.Out, !0).onComplete.add((function() {
                        t.startGameCallbackFired || (t.startGameCallbackFired = !0, e && e())
                    }))
                }))
            }
        }, {
            key: "update",
            value: function(e) {
                this.imgLoadingBall.rotation += 1 * e
            }
        }, {
            key: "fadeOut",
            value: function() {
                var e = this;
                this.game.add.tween(this.layout).to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None, !0, 0, 0, !1).onComplete.add((function() {
                    e.layout.visible = !1
                }))
            }
        }, {
            key: "sendToFront",
            value: function() {
                this.game.groups.ui.add(this.layout), this.layout.position.x = this.game.camera.position.x, this.layout.position.y = this.game.camera.position.y
            }
        }]) && xe(t.prototype, i), a && xe(t, a), e
    }();
    i(463);

    function ke(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ie = function() {
        function e(t, i, a, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.land = i, this.config = a, this.alive = !0, this.playerIndex = n, this.money = 0, this.totalMoney = 0, this.radius = this.game.gameConfig.character.radius, this.state = {
                IDLE: "IDLE",
                CHEER: "CHEER",
                FROWN: "FROWN",
                DEAD: "DEAD",
                DISCONNECTED: "DISCONNECTED"
            }, this.flip = 1, this.config.character.key === this.game.gameConfig.character.SHARKO.key ? this.frames = {
                IDLE: "sharko_default",
                CHEER: "sharko_cheer",
                FROWN: "sharko_frown",
                DEAD: "sharko_frown",
                DISCONNECTED: "sharko_frown"
            } : (this.flip = -1, this.frames = {
                IDLE: "zig_default",
                CHEER: "zig_cheer",
                FROWN: "zig_frown",
                DEAD: "zig_frown",
                DISCONNECTED: "zig_frown"
            }), this.sprite = new Phaser.Sprite(this.game, 0, 0, "ingame", this.frames.IDLE), this.sprite.anchor.set(.5, .5);
            var o = this.game.gameConfig.character[i.castleKey].castle;
            i.castleKey === this.config.character.key ? a.flipped ? this.sprite.position.copyFrom(o.charPositionF) : this.sprite.position.copyFrom(o.charPosition) : a.flipped ? this.sprite.position.copyFrom(o.charPosition) : this.sprite.position.copyFrom(o.charPositionF), this.sprite.position.add(i.castleX, i.castleY), this.land.renderSprite.addChild(this.sprite), this.sprite.anchor.y = 1, this.sprite.anchor.x = .5, this.baseScale = .25, this.sprite.scale.x = this.baseScale, this.sprite.scale.y = this.baseScale, i.left || (this.sprite.scale.x *= -1), this.sprite.scale.x *= this.flip;
            this.scaleTween = this.game.add.tween(this.sprite.scale).to({
                y: .95 * this.baseScale
            }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.worldSample = new Phaser.Point, this.currentState = null, this.stateTime = -1, this.setState(this.state.IDLE), this.collisionCenter = new Phaser.Point, this.collisionCenter.x = this.sprite.x, this.collisionCenter.y = this.sprite.position.y - 120 * this.sprite.scale.y, this.game.DEBUG && (console.log("---COLLISION SETTINGS"), console.log(this.config.character.key), console.log("collisionCenter.x ".concat(this.collisionCenter.x)), console.log("collisionCenter.y ".concat(this.collisionCenter.y)), console.log("sprite.position.y ".concat(this.sprite.position.y)), console.log("sprite.height ".concat(this.sprite.height)), console.log("sprite.scale.y ".concat(this.sprite.scale.y)))
        }
        var t, i, a;
        return t = e, (i = [{
            key: "update",
            value: function(e) {
                this.stateTime > 0 && (this.stateTime -= e, this.stateTime <= 0 && this.setState(this.state.IDLE))
            }
        }, {
            key: "setState",
            value: function(e) {
                if (this.game.DEBUG && (console.log("Setting ".concat(this.config.character.key, " state")), console.log(e)), this.currentState !== this.state.DEAD && this.currentState !== this.state.DISCONNECTED) switch (this.currentState = e, this.sprite.frameName = this.frames[this.currentState], e) {
                    case this.state.IDLE:
                        this.stateTime = -1;
                        break;
                    case this.state.CHEER:
                    case this.state.FROWN:
                        this.stateTime = 2;
                        break;
                    case this.state.DEAD:
                        this.tintDead(), this.stateTime = -1;
                        break;
                    case this.state.DISCONNECTED:
                        this.stateTime = -1
                }
            }
        }, {
            key: "setOpponent",
            value: function(e) {
                this.opponent = e
            }
        }, {
            key: "rewardMoney",
            value: function(e) {
                this.money += e, this.totalMoney += e
            }
        }, {
            key: "payMoney",
            value: function(e) {
                this.game.soundManager.playSfx("payout", 1, 1, .2), this.money -= e;
                var t = this.land.weapon.getChargeWorld(this.worldSample);
                this.game.effectManager.spawnUnlockParticles(t.x, t.y, 20), this.setState("CHEER")
            }
        }, {
            key: "getCharacterWorld",
            value: function(e) {
                return e || (e = this.worldSample), e.x = this.sprite.x + this.land.renderSprite.x, e.y = this.sprite.y + this.land.renderSprite.y, e
            }
        }, {
            key: "projectileVsCharacter",
            value: function(e, t, i, a) {
                var n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (!this.alive) return !1;
                var o = this.collisionCenter.x - e,
                    s = this.collisionCenter.y - t,
                    r = Math.sqrt(o * o + s * s);
                return n && r < 500 && this.setState("FROWN"), r < i + this.radius && (this.setState(this.state.DEAD), this.alive = !1, this.scaleTween.stop(), this.game.gameState.playerHit(this, a), !0)
            }
        }, {
            key: "tintDead",
            value: function() {
                this.sprite.tint = 5592405
            }
        }]) && ke(t.prototype, i), a && ke(t, a), e
    }();

    function Oe(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ce = function() {
        function e(t, i, a, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.arena = i, this.land = a, this.root = new Phaser.Group(this.game), this.game.groups.game.add(this.root), this.game.groups.game.sendToBack(this.root), this.ai = !1, this.gConf = this.game.gameConfig, this.weaponConfig = null, this.minChargeFire = .4, this.weaponTypes = this.gConf.weaponType, this.type = null, this.support = new Phaser.Sprite(this.game, 0, 0, "terrain", "structure"), this.support.anchor.set(.5, 0), this.root.addChild(this.support), this.charge = new Phaser.Sprite(this.game, 0, 0, "ingame", "Aimer1"), this.charge.anchor.set(0, .5), this.charge.scale.set(.2), this.root.addChild(this.charge), this.root.position.copyFrom(a.renderSprite.position), this.root.position.x += a.castleX, this.root.position.y += a.castleY;
            var o = this.game.gameConfig.character[a.castleKey].castle;
            a.castleKey === n.character.key ? n.flipped ? this.root.position.x += o.weaponPositionF.x : this.root.position.x += o.weaponPosition.x : n.flipped ? this.root.position.x += o.weaponPosition.x : this.root.position.x += o.weaponPositionF.x, this.root.position.y += o.weaponPosition.y, this.aimReady = new Phaser.Sprite(this.game, 0, 0, "aimReady"), this.aimReady.anchor.set(.5, .5), this.aimReady.scale.set(.5), this.root.addChild(this.aimReady), this.game.add.tween(this.aimReady).to({
                rotation: 2 * Math.PI
            }, 4e3, Phaser.Easing.Linear.None, !0, 0, -1, !1), this.game.add.tween(this.aimReady.scale).to({
                x: .6,
                y: .6
            }, 1e3, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.setWeaponType(n.weaponType), this.readyToFire = !1, this.activePointer = null, this.aimVector = new Phaser.Point, this.aimFactor = 0, this.tmp = new Phaser.Point, this.aiAimLerp = new Phaser.Point, this.aiAimDelayLength = 1, this.aiAimDelay = this.aiAimDelayLength, this.aiFireDelayLength = 1, this.aiAimTarget = null, this.pointerLabel = null, this._setUpTutorial()
        }
        var t, i, a;
        return t = e, (i = [{
            key: "_setUpTutorial",
            value: function() {
                var e = new o.a.Layout(this.game, this.game.cache.getLayout("layout_tutorial"));
                e.setup(), this.game.groups.ui.add(e);
                var t = e.getElementById("cursor"),
                    i = e.getElementById("cursorDrag"),
                    a = e.getElementById("finger"),
                    n = e.getElementById("fingerDrag");
                if (t.scale.set(.5, .5), i.scale.set(.5, .5), a.scale.set(.5, .5), n.scale.set(.5, .5), this.game.device.desktop) this._tutorialPointer = t, this._tutorialPointerDrag = i;
                else {
                    this._tutorialPointer = a, this._tutorialPointerDrag = n;
                    var s = this.land.left ? 1 : -1;
                    this._tutorialPointer.scale.x *= s, this._tutorialPointerDrag.scale.x *= s
                }
                t.visible = !1, i.visible = !1, a.visible = !1, n.visible = !1, this.pointerLabel = this._tutorialPointer, this._flagHasShot = this.game.storageManager.getValue("shootTutorial")
            }
        }, {
            key: "showTutorialPointer",
            value: function() {
                var e = this.land.left ? 1 : -1;
                this.pointerLabel.position.x = this.aimReady.worldPosition.x - 20 * e, this.pointerLabel.position.y = this.aimReady.worldPosition.y + 20, this.pointerLabel.alpha = 1, this.pointerLabel.visible = !0;
                var t = this.pointerLabel.position.x - 75 * e,
                    i = this.pointerLabel.position.y + 75;
                this.pointerTween || (this.pointerTween = this.game.add.tween(this.pointerLabel.position).to({
                    x: t,
                    y: i
                }, 2e3, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !1), this.game.add.tween(this.pointerLabel).to({
                    alpha: 0
                }, 2e3, Phaser.Easing.Linear.Out, !0, 0, -1, !1))
            }
        }, {
            key: "hideTutorialPointer",
            value: function() {
                this.pointerLabel.visible = !1, this.pointerTween && (this.pointerTween.stop(), this.pointerTween = null)
            }
        }, {
            key: "setWeaponType",
            value: function(e) {
                this.weaponConfig = this.gConf.weapon[e], this.type = e;
                var t = this.land.left ? 1 : -1;
                this.base && (this.base.kill(), this.baseAim.kill(), this.aim.kill()), this.base = new Phaser.Sprite(this.game, 0, 0, "weapons", this.weaponConfig.img), this.base.position.set(.5 * -this.base.width * t, -this.base.height), this.base.position.add(this.weaponConfig.rootOffset.x * t, this.weaponConfig.rootOffset.y), this.root.addChild(this.base), this.base.scale.x = t, this.base.visible = !0, this.baseAim = new Phaser.Sprite(this.game, 0, 0, "weapons", this.weaponConfig.base), this.baseAim.scale.copyFrom(this.base.scale), this.root.addChild(this.baseAim), this.baseAim.position.copyFrom(this.base.position), this.aim = new Phaser.Sprite(this.game, 0, 0, "weapons", this.weaponConfig.aim), this.root.addChild(this.aim), this.aim.anchor.copyFrom(this.weaponConfig.aimAnchor), this.aim.position.copyFrom(this.baseAim.position), this.aim.scale.copyFrom(this.baseAim.scale), this.aim.position.x += this.weaponConfig.chargeOffset.x * t, this.aim.position.y += this.weaponConfig.chargeOffset.y, this.root.bringToTop(this.baseAim), this.charge.position.copyFrom(this.aim.position), this.charge.originalX = this.charge.position.x, this.charge.originalY = this.charge.position.y, this.aimReady.position.copyFrom(this.charge.position), this.root.bringToTop(this.aimReady), this.root.bringToTop(this.charge)
            }
        }, {
            key: "setReadyToFire",
            value: function(e) {
                this.readyToFire = e, !0 === this.readyToFire && this.showTutorialPointer(), this.aiFireDelay = this.aiFireDelayLength
            }
        }, {
            key: "update",
            value: function(e) {
                if (!this.readyToFire) return this.aimReady.visible = !1, this.charge.alpha = 0, this.base.visible = !0, this.baseAim.visible = !1, void(this.aim.visible = !1);
                !1 === this.ai && this.activePointer && (this.getChargeWorld(this.aimVector), this.aimVector.subtract(this.activePointer.realWorldX, this.activePointer.realWorldY));
                var t = this.aimVector.getMagnitude();
                if (0 === t) return this.aimReady.visible = !0, this.charge.alpha = 0, this.base.visible = !0, this.baseAim.visible = !1, void(this.aim.visible = !1);
                this.base.visible = !1, this.baseAim.visible = !0, this.aim.visible = !0, this.aimReady.visible = !1, t > this.game.gameConfig.aimLength && (t = this.game.gameConfig.aimLength), this.aimFactor = t / this.game.gameConfig.aimLength, this.aimVector.normalize();
                var i = Math.atan2(-this.aimVector.x, this.aimVector.y);
                switch (this.charge.rotation = i + .5 * Math.PI, this.charge.scale.x = t / 512 * 1.2, this.charge.scale.y = t / 512 * 1.2, this.charge.position.x = this.charge.originalX, this.charge.position.y = this.charge.originalY, this.charge.position.x += this.aimVector.x * this.weaponConfig.chargeAnchorOffset.x, this.charge.position.y += this.aimVector.y * this.weaponConfig.chargeAnchorOffset.y, this.charge.alpha = 1, this.charge.frameName = "Aimer1", this.aimFactor < this.minChargeFire ? this.charge.alpha = .5 : this.aimFactor < .6 || this.aimFactor, this.type) {
                    case this.weaponTypes.SLING:
                    case this.weaponTypes.BEACH_BALL:
                        this.land.left ? this.aim.rotation = this.charge.rotation : this.aim.rotation = this.charge.rotation + Math.PI;
                        break;
                    case this.weaponTypes.CATAPULT:
                    case this.weaponTypes.SUNSCREEN:
                        this.land.left ? (this.aim.rotation = .5 * Math.PI, this.aim.rotation += -this.aimFactor * Math.PI * .7) : (this.aim.rotation = .5 * -Math.PI, this.aim.rotation += this.aimFactor * Math.PI * .7);
                        break;
                    case this.weaponTypes.HARPOON:
                    case this.weaponTypes.CANON:
                    case this.weaponTypes.DUCKLING:
                    case this.weaponTypes.ICE_CREAM:
                    case this.weaponTypes.GOLDEN_TURRET:
                    case this.weaponTypes.BANANA_BOMB:
                    case this.weaponTypes.WATER_BOMB:
                    case this.weaponTypes.BOOMERANG:
                        this.land.left ? this.aim.rotation = this.charge.rotation : this.aim.rotation = this.charge.rotation + Math.PI
                }
            }
        }, {
            key: "inputPointerDown",
            value: function(e) {
                if (!this.readyToFire) return !1;
                if (this.ai) return !1;
                if (this.activePointer) return !1;
                this.getChargeWorld(this.tmp), this.aimVector.set(e.realWorldX, e.realWorldY);
                var t = this.tmp.distance(this.aimVector);
                return this.aimVector.set(0, 0), this.aimFactor = t / this.game.gameConfig.aimLength, !(this.aimFactor > this.minChargeFire || (this.activePointer = e, 0))
            }
        }, {
            key: "inputPointerUp",
            value: function() {
                this.activePointer && (this.activePointer = null, this.aimFactor < this.minChargeFire ? this.aimVector.set(0, 0) : (this._releaseProjectile(), this.hideTutorialPointer(), this.aimVector.set(0, 0)))
            }
        }, {
            key: "_releaseProjectile",
            value: function() {
                var e = this;
                this.readyToFire = !1, this._flagHasShot = !0, this.game.storageManager.setValue("shootTutorial", !0), this.land.character.setState("CHEER");
                var t = new Phaser.Point;
                this.getChargeWorld(t);
                var i = new Phaser.Point;
                switch (i.copyFrom(this.aimVector), i.x *= this.weaponConfig.power * this.aimFactor, i.y *= this.weaponConfig.power * this.aimFactor, this.type) {
                    case this.weaponTypes.DUCKLING:
                        for (var a = 0; a < this.gConf.weapon[this.weaponTypes.DUCKLING].numberOfProjectiles; a++) {
                            var n = 1e3 * this.gConf.weapon[this.weaponTypes.DUCKLING].delayBetweenShots;
                            this.game.time.events.add(a * n, (function() {
                                e.arena.fireProjectile(e.weaponConfig.projectile, t, i, e.land.character), e.game.soundManager.playSfx(e.weaponConfig.fireSound, 1, .8 + .4 * e.aimFactor)
                            }), this)
                        }
                        break;
                    case this.weaponTypes.ICE_CREAM:
                        this.arena.fireProjectile(this.weaponConfig.projectile, t, i, this.land.character);
                        for (var o = 0; o < Math.floor(this.gConf.weapon[this.type].numberOfProjectiles / 2); o++) {
                            var s = new Phaser.Point;
                            s.copyFrom(i), s.rotate(0, 0, (o + 1) * this.gConf.weapon[this.type].angleBetweenProjectiles, !0);
                            var r = new Phaser.Point;
                            r.copyFrom(i), r.rotate(0, 0, -(o + 1) * this.gConf.weapon[this.type].angleBetweenProjectiles, !0), this.arena.fireProjectile(this.weaponConfig.projectile, t, s, this.land.character), this.arena.fireProjectile(this.weaponConfig.projectile, t, r, this.land.character)
                        }
                        this.game.soundManager.playSfx(this.weaponConfig.fireSound, 1, .8 + .4 * this.aimFactor);
                        break;
                    default:
                        this.arena.fireProjectile(this.weaponConfig.projectile, t, i, this.land.character, this.game.soundManager.playSfx(this.weaponConfig.fireSound, 1, .8 + .4 * this.aimFactor))
                }
            }
        }, {
            key: "getChargeWorld",
            value: function(e) {
                return e.x = this.charge.originalX + this.root.x, e.y = this.charge.originalY + this.root.y, e
            }
        }, {
            key: "cancelAiming",
            value: function() {
                this.activePointer = null, this.aimFactor = 0, this.aimVector.set(0, 0), this.hideTutorialPointer()
            }
        }]) && Oe(t.prototype, i), a && Oe(t, a), e
    }();

    function Ae(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ne = function() {
        function e(t, i, a, n) {
            var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.type = i, this.owner = n, this.alive = !0, this.local = o, this.local && (this.uuid = "p".concat(this.game.localPlayerIndex, "_").concat(this.game.gameState.localProjectilesIndex), this.game.gameState.localProjectilesIndex++), this.config = this.game.gameConfig.projectile[i], this.gravity = this.config.gravity, this.windInfluenceFactor = this.config.windInfluenceFactor, this.data = {
                velocity: new Phaser.Point,
                position: new Phaser.Point
            }, this.data.velocity = Object.assign(this.data.velocity, a.velocity), this.data.position = Object.assign(this.data.position, a.position), this.data.position || (this.data.position = new Phaser.Point), this.data.velocity || (this.data.velocity = new Phaser.Point);
            var s = this.config.img;
            switch (this.type) {
                case this.game.gameConfig.projectileType.ICE_CREAM:
                case this.game.gameConfig.projectileType.WATER_BOMB:
                case this.game.gameConfig.projectileType.SUNSCREEN_DROPLET:
                    s = this.config.images[Math.floor(Math.random() * this.config.images.length)]
            }
            this.sprite = new Phaser.Sprite(this.game, 0, 0, "weapons", s), this.sprite.anchor.set(.5, .5), this.sprite.scale.set(1.5, 1.5), !1 === this.owner.land.left && (this.config.rotate && (this.sprite.scale.x *= -1), this.sprite.scale.y *= -1), this.sprite.position.copyFrom(this.data.position), this.game.groups.game.add(this.sprite), this.velNormal = new Phaser.Point, this.startingPosition = new Phaser.Point, this.startingPosition.copyFrom(this.sprite.position), this.startingVelocity = new Phaser.Point, this.startingVelocity.copyFrom(this.data.velocity), this._timeSinceSpawned = 0, this._yVelocityZeroFlag = !1
        }
        var t, i, a;
        return t = e, (i = [{
            key: "clear",
            value: function() {
                this.alive = !1, this.sprite.kill()
            }
        }, {
            key: "collide",
            value: function(e, t, i) {
                return this.type === this.game.gameConfig.projectileType.BEACH_BALL ? this._hasBouncedFlag ? (this.explode(e, t, i), !0) : (this._hasBouncedFlag = !0, this._bounce(e, t, i), !1) : this.type === this.game.gameConfig.projectileType.BANANA_BOMB ? this._hasBouncedFlag ? (this.explode(e, t, i), !0) : (this._hasBouncedFlag = !0, this._randomBounce(e, t, i), !1) : (this.explode(e, t, i), !0)
            }
        }, {
            key: "_bounce",
            value: function(e, t, i) {
                var a = this._checkBounceDirection(e, t, i);
                a.normalize();
                var n = Math.sqrt(this.data.velocity.x * this.data.velocity.x + this.data.velocity.y * this.data.velocity.y);
                this.data.velocity.x = a.x * n, this.data.velocity.y = a.y * n
            }
        }, {
            key: "_checkBounceDirection",
            value: function(e, t, i) {
                for (var a = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }, n = new Phaser.Point, o = -3; o < 4; o++)
                    for (var s = e + o, r = -3; r < 4; r++) {
                        var l = t + r;
                        i.getPixel(s, l, a), a.a < 255 && (n.x += o, n.y += r)
                    }
                return n
            }
        }, {
            key: "_randomBounce",
            value: function(e, t, i) {
                var a = this._checkPossibleBounceDirections(e, t, i),
                    n = a[Math.floor(Math.random() * a.length)];
                if (n) {
                    n.normalize();
                    var o = Math.sqrt(this.data.velocity.x * this.data.velocity.x + this.data.velocity.y * this.data.velocity.y);
                    this.data.velocity.x = n.x * o, this.data.velocity.y = n.y * o
                } else this.data.velocity.x *= -1, this.data.velocity.y *= -1
            }
        }, {
            key: "_checkPossibleBounceDirections",
            value: function(e, t, i) {
                for (var a = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }, n = [], o = -3; o < 4; o++)
                    for (var s = e + o, r = -3; r < 4; r++) {
                        var l = t + r;
                        if (i.getPixel(s, l, a), a.a < 255) {
                            var h = new Phaser.Point(o, r);
                            n.push(h)
                        }
                    }
                return n
            }
        }, {
            key: "explode",
            value: function(e, t, i) {
                var a = this;
                if (this.alive = !1, this.type !== this.game.gameConfig.projectileType.HARPOON) this._removeLandAt(e, t, i, this.sprite.position.x, this.sprite.position.y);
                else {
                    this.velNormal.copyFrom(this.data.velocity), this.velNormal.normalize(), this.velNormal.multiply(35, 35);
                    var n = this.sprite.position.x,
                        o = this.sprite.position.y;
                    e -= 1.5 * this.velNormal.x, t -= 1.5 * this.velNormal.y, n -= this.velNormal.x, o -= this.velNormal.y;
                    for (var s = function(s) {
                            e += a.velNormal.x, t += a.velNormal.y, n += a.velNormal.x, o += a.velNormal.y;
                            var r = e,
                                l = t,
                                h = n,
                                c = o;
                            a.game.time.events.add(100 * s, (function() {
                                a._removeLandAt(r, l, i, h, c, .4)
                            }), a)
                        }, r = 0; r < 6; r++) s(r)
                }
                this.local && this.type === this.game.gameConfig.projectileType.WATER_BOMB && this.game.time.events.add(100, (function() {
                    a._explodeWaterBomb()
                }), this), i.needsUpdate = !0, this.local && this._updateScore(e, t, i)
            }
        }, {
            key: "_removeLandAt",
            value: function(e, t, i, a, n) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
                i.blendSourceAtop(), i.circle(e, t, this.config.explosionRadius + 8, "#5B492B"), i.blendDestinationOut(), i.circle(e, t, this.config.explosionRadius, "#000000");
                var s = this.game.effectManager.playAnimation(this.game.effectManager.animation.BURST, 120);
                s.anchor.set(.5, .5), s.position.set(a, n), s.scale.set(1.1 * this.config.aimingForceFactor, 1.1 * this.config.aimingForceFactor), s.rotation = Math.random() * Math.PI * 2;
                var r = this.config.aimingForceFactor / 2;
                this.game.soundManager.playSfx("explosion", r, .8 + .4 * r), this.game.effectManager.spawnParticles(a, n, Math.floor(.1 * this.config.explosionRadius * 3 * o)), this.game.DEBUG_DISABLE_SHAKE || this.game.camera.shake(.005 * this.config.aimingForceFactor, 300 * this.config.aimingForceFactor), i.character && i.character.projectileVsCharacter(e, t, this.config.explosionRadius, this.local, !0)
            }
        }, {
            key: "_updateScore",
            value: function(e, t, i) {
                var a = this.owner.opponent.getCharacterWorld(),
                    n = Math.abs(this.sprite.position.x - a.x);
                n = Math.abs(n - this.config.explosionRadius);
                var o = this.config.reward;
                return this.owner.land.index === i.index ? (this.game.gameState.gameUI.showHitText(this.sprite.position, 0, 0), !0) : 1 === i.index ? (this.owner.rewardMoney(o.middle), this.game.gameState.gameUI.showHitText(this.sprite.position, 1, o.middle), !0) : n > 190 ? (this.owner.rewardMoney(o.enemyLand), this.game.gameState.gameUI.showHitText(this.sprite.position, 2, o.enemyLand), !0) : (this.owner.rewardMoney(o.enemyCastle), this.game.gameState.gameUI.showHitText(this.sprite.position, 3, o.enemyCastle), !0)
            }
        }, {
            key: "update",
            value: function(e) {
                this.alive && (this._timeSinceSpawned += e, this._boomerangCheckCurveBack() && this._boomerangUpdateRoutine(e), this._goldenTurretCheckActivation() && this._goldenTurretUpdateRoutine(e), this.data.velocity.y += this.config.gravity * e, this.data.velocity.x += this.game.windSpeed * e * this.windInfluenceFactor, this.sprite.position.x += this.data.velocity.x * e, this.sprite.position.y += this.data.velocity.y * e, this._resolveRotation(e), this._sunscreenCheckExplosion() && this._explodeSunscreen(), this.sprite.position.y > -50 && (this.projectileHitWater(), this.game.cm.sendExplosionEvent(this.getProjectileData())))
            }
        }, {
            key: "_resolveRotation",
            value: function() {
                if (this.type === this.game.gameConfig.projectileType.GOLDEN_TURRET)
                    if (this._goldenTurretCheckActivation()) {
                        if (this._rocketFollowing) {
                            this.velNormal.copyFrom(this.data.velocity), this.velNormal.normalize();
                            var e = this.owner.land.left ? 1 : -1,
                                t = Math.atan2(-this.velNormal.x, this.velNormal.y);
                            this.sprite.rotation = t + .5 * Math.PI * e
                        }
                    } else this.sprite.rotation += 15e-6 * Math.max(this.data.velocity.x, this.data.velocity.y);
                else if (this.config.rotate) this.sprite.rotation += 15e-6 * Math.max(this.data.velocity.x, this.data.velocity.y);
                else {
                    this.velNormal.copyFrom(this.data.velocity), this.velNormal.normalize();
                    var i = Math.atan2(-this.velNormal.x, this.velNormal.y);
                    this.sprite.rotation = i + .5 * Math.PI
                }
            }
        }, {
            key: "projectileHitWater",
            value: function() {
                this.alive = !1;
                var e = this.game.effectManager.playAnimation(this.game.effectManager.animation.SPLASH, 120),
                    t = 2 * (this.config.aimingForceFactor / 2 - .5);
                t = .5 * (1 - t), this.game.soundManager.playSfx("Splash", 1, 1 + t), e.anchor.set(.5, 1), e.position.set(this.sprite.position.x, 0), e.scale.set(.5 * this.config.aimingForceFactor, .5 * this.config.aimingForceFactor), this.owner.land.character.setState("FROWN"), this.local && this.game.gameState.gameUI.showHitText(this.sprite.position, 4, 0)
            }
        }, {
            key: "_sunscreenCheckExplosion",
            value: function() {
                return this.type === this.game.gameConfig.projectileType.SUNSCREEN && (Math.abs(this.data.velocity.y) < 2 && (this._yVelocityZeroFlag = !0), this._yVelocityZeroFlag && this._timeSinceSpawned > this.game.gameConfig.weapon.SUNSCREEN.minTime)
            }
        }, {
            key: "_goldenTurretCheckActivation",
            value: function() {
                return this.type === this.game.gameConfig.projectileType.GOLDEN_TURRET && this._timeSinceSpawned > this.game.gameConfig.projectile.GOLDEN_TURRET.minTime && (this._flagRocketActive || this.shootingSfx && (this.shootingSfx.stop(), this.game.soundManager.playSfx(this.config.specialSfx, 1)), this._flagRocketActive = !0, !0)
            }
        }, {
            key: "_goldenTurretUpdateRoutine",
            value: function() {
                this.gravity = 0, this.windInfluenceFactor = 0;
                var e = new Phaser.Point;
                this.owner.opponent.getCharacterWorld(e);
                var t = new Phaser.Point;
                if (t.x = e.x - this.sprite.position.x, t.y = e.y - this.sprite.position.y, t.normalize(), this._timeSinceSpawned > this.game.gameConfig.projectile.GOLDEN_TURRET.reactivationTime) this._rocketFollowing || (this.game.soundManager.playSfx(this.game.gameConfig.weapon.GOLDEN_TURRET.fireSound, 1), this._rocketFollowing = !0), this.data.velocity.x = t.x * this.config.followSpeed, this.data.velocity.y = t.y * this.config.followSpeed;
                else {
                    this.data.velocity.x = 0, this.data.velocity.y = 0;
                    var i = this.owner.land.left ? 1 : -1,
                        a = Math.atan2(-t.x, t.y);
                    this.sprite.rotation = a + .5 * Math.PI * i
                }
            }
        }, {
            key: "_boomerangCheckCurveBack",
            value: function() {
                return this.type === this.game.gameConfig.projectileType.BOOMERANG && this._timeSinceSpawned > this.game.gameConfig.projectile.BOOMERANG.minTime
            }
        }, {
            key: "_boomerangUpdateRoutine",
            value: function(e) {
                if (Phaser.Math.distanceSq(this.startingPosition.x, this.startingPosition.y, this.sprite.position.x, this.sprite.position.y) <= this.config.collisionReturnRange * this.config.collisionReturnRange) this.alive = !1;
                else {
                    this.gravity = 0, this.windInfluenceFactor = 0, this.firstReturnVelocityX || (this.firstReturnVelocityX = this.data.velocity.x);
                    var t = new Phaser.Point;
                    t.x = this.startingPosition.x - this.sprite.position.x, t.y = this.startingPosition.y - this.sprite.position.y, t.normalize();
                    var i = new Phaser.Point;
                    if (i.copyFrom(this.data.velocity).normalize(), Math.abs(t.x - i.x) <= .1 && Math.abs(t.y - i.y) <= .1) {
                        var a = this.data.velocity.getMagnitude();
                        this.data.velocity.x = a * t.x, this.data.velocity.y = a * t.y, this._returningFlag = !0
                    }
                    var n = this.firstReturnVelocityX < 0 ? -1 : 1,
                        o = new Phaser.Point;
                    o.copyFrom(this.data.velocity), Phaser.Point.rotate(o, 0, 0, this.config.angularSpeed * e * n), this.data.velocity.x = o.x, this.data.velocity.y = o.y
                }
            }
        }, {
            key: "setNonLocalData",
            value: function(e) {
                this.alive && (this.data.velocity.y = e.velocity.y, this.data.velocity.x = e.velocity.x, this.data.position.x = e.position.x, this.data.position.y = e.position.y, this.sprite.position.x = e.position.x, this.sprite.position.y = e.position.y)
            }
        }, {
            key: "updateNonLocal",
            value: function(e) {
                this.alive && (this._timeSinceSpawned += e, this._boomerangCheckCurveBack() && this._boomerangUpdateRoutine(e), this._goldenTurretCheckActivation() && this._goldenTurretUpdateRoutine(e), this.data.velocity.y += this.config.gravity * e, this.data.velocity.x += this.game.windSpeed * e * this.game.gameConfig.windProjectileFactor, this.sprite.position.x += this.data.velocity.x * e, this.sprite.position.y += this.data.velocity.y * e, this._resolveRotation())
            }
        }, {
            key: "setPosition",
            value: function(e, t) {
                this.sprite.position.x = e, this.sprite.position.y = t
            }
        }, {
            key: "getProjectileData",
            value: function() {
                var e = {
                    x: this.sprite.position.x,
                    y: this.sprite.position.y
                };
                return this.game.sc.newProjectileData(this.uuid, this.alive, this.type, e, this.data.velocity)
            }
        }, {
            key: "_explodeSunscreen",
            value: function() {
                this.alive = !1, this.game.soundManager.playSfx(this.config.explodeSfx);
                for (var e = this.game.gameConfig.weapon.SUNSCREEN, t = this.game.gameConfig.projectile.SUNSCREEN_DROPLET, i = 0; i < e.numberOfProjectiles; i++) {
                    var a = new Phaser.Point;
                    a.copyFrom(this.data.velocity);
                    var n = t.horizontalMomentum.min + Math.random() * (t.horizontalMomentum.max - t.horizontalMomentum.min),
                        o = Math.random() < .5 ? 1 : -1;
                    a.x += o * n;
                    var s = t.verticalMomentum.min + Math.random() * (t.verticalMomentum.max - t.verticalMomentum.min);
                    o = Math.random() < .5 ? 1 : -1, a.y += o * s, this.game.gameState.arena.fireProjectile(this.game.gameConfig.projectileType.SUNSCREEN_DROPLET, this.sprite.position, a, this.owner, this.local)
                }
            }
        }, {
            key: "_explodeWaterBomb",
            value: function() {
                this.alive = !1, this.game.soundManager.playSfx(this.config.explodeSfx);
                for (var e = this.game.gameConfig.weapon.WATER_BOMB, t = this.game.gameConfig.projectile.WATER_DROPLET, i = 0; i < e.numberOfProjectiles; i++) {
                    var a = new Phaser.Point,
                        n = t.horizontalMomentum.min + Math.random() * (t.horizontalMomentum.max - t.horizontalMomentum.min),
                        o = Math.random() < .5 ? 1 : -1;
                    a.x = o * n + .1 * this.data.velocity.x, a.y = -t.verticalMomentum, this.game.gameState.arena.fireProjectile(this.game.gameConfig.projectileType.WATER_DROPLET, this.sprite.position, a, this.owner, this.local)
                }
            }
        }, {
            key: "setShootingSfx",
            value: function(e) {
                this.shootingSfx = e
            }
        }]) && Ae(t.prototype, i), a && Ae(t, a), e
    }();

    function Le(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Me = function() {
        function e(t, i) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.arena = i, this.nonLocalProjectiles = []
        }
        var t, i, a;
        return t = e, (i = [{
            key: "handleProjectileData",
            value: function(e) {
                for (var t = 0; t < e.length; t++) this._isTracked(e[t]) || this._spawnOtherProjectile(e[t]);
                for (var i = 0; i < this.nonLocalProjectiles.length; i++) {
                    var a = this._containsProjectile(this.nonLocalProjectiles[i], e); - 1 === a ? (this._destroyProjectileAtIndex(i), i--) : this.nonLocalProjectiles[i].setNonLocalData(e[a])
                }
            }
        }, {
            key: "_isTracked",
            value: function(e) {
                for (var t = 0; t < this.nonLocalProjectiles.length; t++)
                    if (this.nonLocalProjectiles[t].uuid === e.uuid) return !0;
                return !1
            }
        }, {
            key: "_spawnOtherProjectile",
            value: function(e) {
                var t = new Ne(this.game, e.type, {
                        position: e.position,
                        velocity: e.velocity
                    }, this.arena.playerLands[this.game.otherPlayerIndex].character, !1),
                    i = null;
                if (e.type === this.game.gameConfig.projectileType.SUNSCREEN_DROPLET || e.type === this.game.gameConfig.projectileType.WATER_DROPLET) {
                    var a = this.game.gameConfig.projectile[e.type].parentProjectile;
                    i = this.game.gameConfig.projectile[a].explodeSfx
                } else {
                    var n = this.game.gameConfig.weaponOfProjectile[t.type];
                    i = this.game.gameConfig.weapon[n].fireSound
                }
                var o = this.game.soundManager.playSfx(i, 1, .8 + .4 * this.aimFactor);
                return t.setShootingSfx(o), t.uuid = e.uuid, this.nonLocalProjectiles.push(t), t
            }
        }, {
            key: "_containsProjectile",
            value: function(e, t) {
                for (var i = 0; i < t.length; i++)
                    if (t[i].uuid === e.uuid) return i;
                return -1
            }
        }, {
            key: "_destroyProjectileAtIndex",
            value: function(e) {
                this.nonLocalProjectiles[e].clear(), this.nonLocalProjectiles.splice(e, 1)
            }
        }, {
            key: "explodeProjectile",
            value: function(e, t) {
                var i = this._getProjectile(e.projectileUuid);
                null === i && (i = this._spawnOtherProjectile(t));
                var a = this.arena.getLandOfIndex(e.landIndex);
                i.explode(e.position.x, e.position.y, a), this._destroyProjectile(i.uuid)
            }
        }, {
            key: "_destroyProjectile",
            value: function(e) {
                for (var t = 0; t < this.nonLocalProjectiles.length; t++) this.nonLocalProjectiles[t].uuid === e && this._destroyProjectileAtIndex(t)
            }
        }, {
            key: "_getProjectile",
            value: function(e) {
                for (var t = 0; t < this.nonLocalProjectiles.length; t++)
                    if (this.nonLocalProjectiles[t].uuid === e) return this.nonLocalProjectiles[t];
                return null
            }
        }, {
            key: "sinkProjectile",
            value: function(e) {
                var t = this._getProjectile(e.projectileUuid);
                t.sprite.position.x = e.position.x, t.sprite.position.y = e.position.y, t.projectileHitWater(), this._destroyProjectile(t.uuid)
            }
        }, {
            key: "update",
            value: function(e) {
                for (var t = 0; t < this.nonLocalProjectiles.length; t++) this.nonLocalProjectiles[t].updateNonLocal(e)
            }
        }, {
            key: "puffAllProjectiles",
            value: function() {
                for (var e = 0; e < this.nonLocalProjectiles.length; e++) this.nonLocalProjectiles[e].clear(), this.game.effectManager.spawnUnlockParticles(this.nonLocalProjectiles[e].sprite.position.x, this.nonLocalProjectiles[e].sprite.position.y, 20), this.game.soundManager.playSfx("upgrade_weapon")
            }
        }]) && Le(t.prototype, i), a && Le(t, a), e
    }();

    function Be(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var je = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.game = t, this.config = this.game.gameConfig, this.colorSample = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0
                }, this.projectiles = [], this.nonLocalProjectilesManager = new Me(this.game, this), this.landBuildingParameters = {}
            }
            var t, i, a;
            return t = e, (i = [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    e ? this._generateArena() : (this.landBuildingParameters = t, this._buildArena(this.landBuildingParameters))
                }
            }, {
                key: "_generateArena",
                value: function() {
                    this.lands = [], this.sandSprite = new Phaser.Sprite(this.game, 0, 0, "sandseamless"), this.playerLands = [];
                    var e = this.game.playerConfig.players;
                    this.lengthTotal = 0, this.landBuildingParameters.lands = [];
                    var t = this.lands.length,
                        i = this.game.gameUtils.randomRangeInt(this.config.playerLandWidthMin, this.config.playerLandWidthMax);
                    this.landBuildingParameters.lands[t] = {}, this.landBuildingParameters.lands[t].length = i;
                    var a = this._generateLand(t, i, this.config.playerLandHeight, e[0]);
                    a.index = t, a.character = new Ie(this.game, a, e[0], 0), a.weapon = new Ce(this.game, this, a, e[0]), this.lands.push(a), this.playerLands.push(a), this.lengthTotal += i;
                    var n = this.game.runTutorial ? this.config.landPaddingMin : this.config.landPaddingMax,
                        o = this.game.gameUtils.randomRangeInt(this.config.landPaddingMin, n);
                    this.lengthTotal += o, this.landBuildingParameters.lands[t].paddingRight = o, t = this.lands.length, n = this.game.runTutorial ? this.config.centerLandWidthMin : this.config.centerLandWidthMax, i = this.game.gameUtils.randomRangeInt(this.config.centerLandWidthMin, n), this.landBuildingParameters.lands[t] = {}, this.landBuildingParameters.lands[t].length = i, (a = this._generateLand(t, i, this.config.centerLandHeight)).index = t, this.lands.push(a), this.lengthTotal += i, n = this.game.runTutorial ? this.config.landPaddingMin : this.config.landPaddingMax, o = this.game.gameUtils.randomRangeInt(this.config.landPaddingMin, n), this.lengthTotal += o, this.landBuildingParameters.lands[t].paddingRight = o, t = this.lands.length, i = this.game.gameUtils.randomRangeInt(this.config.playerLandWidthMin, this.config.playerLandWidthMax), this.landBuildingParameters.lands[t] = {}, this.landBuildingParameters.lands[t].length = i, (a = this._generateLand(t, i, this.config.playerLandHeight, e[1])).index = t, a.character = new Ie(this.game, a, e[1], 1), a.weapon = new Ce(this.game, this, a, e[1]), this.lands.push(a), this.playerLands.push(a), this.lengthTotal += i, this.playerLands[0].character.setOpponent(this.playerLands[1].character), this.playerLands[1].character.setOpponent(this.playerLands[0].character)
                }
            }, {
                key: "_generateLand",
                value: function(e, t, i, a) {
                    var n = new Phaser.BitmapData(this.game, null, t, i);
                    n.left = 0 === e, n.index = e;
                    var o = Math.floor(t / 100) + 1,
                        s = Math.floor(t / (o - 1));
                    this.landBuildingParameters.lands[e].splits = o, this.landBuildingParameters.lands[e].splitLength = s;
                    for (var r = [], l = [], h = 0; h < o; h++) {
                        var c = h / (o - 1),
                            u = Math.sin(c * Math.PI),
                            p = c * t,
                            g = i - Math.random() * u * i;
                        0 !== h && h !== o - 1 && (g += 75), r.push(p), l.push(g)
                    }
                    this.landBuildingParameters.lands[e].ridgePointsX = r, this.landBuildingParameters.lands[e].ridgePointsY = l;
                    var d = 0,
                        m = this.game.gameUtils.randomRangeInt(i - 300, i - 230);
                    if (a) {
                        d = 1;
                        for (var f = 0; f < 4; f++) l[d + f] = m
                    }
                    this.landBuildingParameters.lands[e].flattenHeight = m, this.landBuildingParameters.lands[e].cStart = d;
                    for (var y = new Phaser.Polygon, v = [], _ = 10 * o - 1, b = 0; b < _; b++) {
                        var w = b / (_ - 1),
                            E = this.game.math.catmullRomInterpolation(r, w),
                            T = this.game.math.catmullRomInterpolation(l, w);
                        T > i && (T = i), v.push.apply(v, [E, T])
                    }
                    y.setTo(v);
                    var S = new Phaser.Graphics(this.game, 0, 0);
                    S.beginFill(16724991), S.drawPolygon(y), S.endFill();
                    var P = new Phaser.Sprite(this.game, 0, 0, S.generateTexture());
                    if (n.draw(P, 0, i - P.height, P.width, P.height), n.blendSourceIn(), n.draw(this.sandSprite, 0, 0, t, i), n.blendSourceOver(), a) {
                        this.landBuildingParameters.lands[e].castleSprite = a.character.castle.image;
                        var x = new Phaser.Sprite(this.game, 0, 0, a.character.castle.image);
                        this.landBuildingParameters.lands[e].castleKey = a.character.key, n.castleKey = this.landBuildingParameters.lands[e].castleKey, n.castleX = d * s + 4 * s * .5, n.castleX -= .5 * Math.abs(x.width), n.castleY = -x.height + m + 75, this.landBuildingParameters.lands[e].flipCastle = a.flipped, a.flipped && (x.scale.x = -1), n.draw(x, n.castleX, n.castleY, x.width, x.height)
                    }
                    this.landBuildingParameters.lands[e].deco = [];
                    for (var R = 0; R < o; R++)
                        if (!(a && R >= d + 1 && R <= d + 4 - 1)) {
                            var k = {},
                                I = this.config.getRandomDecoKey();
                            P.loadTexture("terrain", I), k.key = I, P.scale.x = Math.random() < .5 ? 1 : -1, k.spriteScaleX = P.scale.x;
                            var O = R * s - .5 * P.width * P.scale.x,
                                C = l[R] - P.height + .5 * P.height * Math.random();
                            k.y = C, O < 0 || O + Math.abs(P.width) > t || C < 0 || (P.rotation = .2 * (Math.random() - .5), k.spriteRotation = P.rotation, n.draw(P, O, C, P.width, P.height), this.landBuildingParameters.lands[e].deco[R] = k)
                        } return n.update(), n.renderSprite = new Phaser.Sprite(this.game, 0, 0, n), this.game.groups.game.add(n.renderSprite), n.renderSprite.position.set(this.lengthTotal, -i), n.rectangle = new Phaser.Rectangle(n.renderSprite.position.x, n.renderSprite.position.y, n.renderSprite.width, n.renderSprite.height), n
                }
            }, {
                key: "_buildArena",
                value: function(e) {
                    this.lands = [], this.sandSprite = new Phaser.Sprite(this.game, 0, 0, "sandseamless"), this.playerLands = [];
                    var t = this.game.playerConfig.players;
                    this.lengthTotal = 0;
                    var i = this.lands.length,
                        a = e.lands[i].length,
                        n = this._buildLand(i, a, this.config.playerLandHeight, t[0]);
                    n.character = new Ie(this.game, n, t[0], 0), n.weapon = new Ce(this.game, this, n, t[0]), this.lands.push(n), this.playerLands.push(n), this.lengthTotal += a, this.game.runTutorial ? this.config.landPaddingMin : this.config.landPaddingMax;
                    var o = e.lands[i].paddingRight;
                    this.lengthTotal += o, i = this.lands.length, this.game.runTutorial ? this.config.centerLandWidthMin : this.config.centerLandWidthMax, a = e.lands[i].length, n = this._buildLand(i, a, this.config.centerLandHeight), this.lands.push(n), this.lengthTotal += a, this.game.runTutorial ? this.config.landPaddingMin : this.config.landPaddingMax, o = e.lands[i].paddingRight, this.lengthTotal += o, i = this.lands.length, a = e.lands[i].length, (n = this._buildLand(i, a, this.config.playerLandHeight, t[1])).character = new Ie(this.game, n, t[1], 1), n.weapon = new Ce(this.game, this, n, t[1]), this.lands.push(n), this.playerLands.push(n), this.lengthTotal += a, this.playerLands[0].character.setOpponent(this.playerLands[1].character), this.playerLands[1].character.setOpponent(this.playerLands[0].character)
                }
            }, {
                key: "_buildLand",
                value: function(e, t, i, a) {
                    var n = new Phaser.BitmapData(this.game, null, t, i);
                    n.left = 0 === e, n.index = e;
                    var o = this.landBuildingParameters.lands[e].splits,
                        s = this.landBuildingParameters.lands[e].splitLength,
                        r = this.landBuildingParameters.lands[e].ridgePointsX,
                        l = this.landBuildingParameters.lands[e].ridgePointsY,
                        h = this.landBuildingParameters.lands[e].cStart,
                        c = this.landBuildingParameters.lands[e].flattenHeight;
                    if (a)
                        for (var u = 0; u < 4; u++) l[h + u] = c;
                    for (var p = new Phaser.Polygon, g = [], d = 10 * o - 1, m = 0; m < d; m++) {
                        var f = m / (d - 1),
                            y = this.game.math.catmullRomInterpolation(r, f),
                            v = this.game.math.catmullRomInterpolation(l, f);
                        v > i && (v = i), g.push.apply(g, [y, v])
                    }
                    p.setTo(g);
                    var _ = new Phaser.Graphics(this.game, 0, 0);
                    _.beginFill(16724991), _.drawPolygon(p), _.endFill();
                    var b = new Phaser.Sprite(this.game, 0, 0, _.generateTexture());
                    if (n.draw(b, 0, i - b.height, b.width, b.height), n.blendSourceIn(), n.draw(this.sandSprite, 0, 0, t, i), n.blendSourceOver(), a) {
                        var w = this.landBuildingParameters.lands[e].castleSprite,
                            E = new Phaser.Sprite(this.game, 0, 0, w);
                        n.castleKey = this.landBuildingParameters.lands[e].castleKey, n.castleX = h * s + 4 * s * .5, n.castleX -= .5 * Math.abs(E.width), n.castleY = -E.height + c + 75, this.landBuildingParameters.lands[e].flipCastle && (E.scale.x = -1), n.draw(E, n.castleX, n.castleY, E.width, E.height)
                    }
                    for (var T = 0; T < o; T++)
                        if (!(a && T >= h + 1 && T <= h + 4 - 1)) {
                            var S = this.landBuildingParameters.lands[e].deco[T];
                            if (S) {
                                var P = S.key;
                                b.loadTexture("terrain", P), b.scale.x = S.spriteScaleX;
                                var x = T * s - .5 * b.width * b.scale.x,
                                    R = S.y;
                                if (x < 0) continue;
                                if (x + Math.abs(b.width) > t) continue;
                                if (R < 0) continue;
                                b.rotation = S.spriteRotation, n.draw(b, x, R, b.width, b.height)
                            }
                        } return n.update(), n.renderSprite = new Phaser.Sprite(this.game, 0, 0, n), this.game.groups.game.add(n.renderSprite), n.renderSprite.position.set(this.lengthTotal, -i), n.rectangle = new Phaser.Rectangle(n.renderSprite.position.x, n.renderSprite.position.y, n.renderSprite.width, n.renderSprite.height), n
                }
            }, {
                key: "setLand",
                value: function(e) {
                    this.lands = e
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = e / 5, i = 0; i < 5; i++)
                        for (var a = 0; a < this.projectiles.length; a++) !0 === this.projectiles[a].alive ? (this.projectiles[a].update(t), this._projectileVsLand(this.projectiles[a]), !1 === this.projectiles[a].alive && (this.projectiles[a].clear(), this.projectiles.splice(a, 1), a--)) : (this.projectiles[a].clear(), this.projectiles.splice(a, 1), a--);
                    for (var n = 0; n < this.lands.length; n++) {
                        var o = this.lands[n];
                        o.weapon && o.weapon.update(e), o.character && o.character.update(e), o.needsUpdate && (o.needsUpdate = !1, o.update())
                    }
                    this.nonLocalProjectilesManager.update(e)
                }
            }, {
                key: "_projectileVsLand",
                value: function(e) {
                    for (var t = 0; t < this.lands.length; t++) {
                        var i = this.lands[t];
                        if (i.rectangle.contains(e.sprite.position.x, e.sprite.position.y)) {
                            var a = Math.round(e.sprite.position.x),
                                n = Math.round(e.sprite.position.y);
                            if (a -= i.renderSprite.position.x, n -= i.renderSprite.position.y, i.character && i.character.projectileVsCharacter(a, n, e.config.projectileRadius, e.local)) {
                                var o = e.explode(a, n, i);
                                if (this.game.cm.sendExplosionEvent(e.getProjectileData(), t), o) return !0
                            }
                            if (i.getPixel(a, n, this.colorSample), !(this.colorSample.a < 255) && e.collide(a, n, i)) return this.game.cm.sendExplosionEvent(e.getProjectileData(), t), !0
                        }
                    }
                    return !1
                }
            }, {
                key: "pointerDown",
                value: function(e) {
                    this.isAiming = !1;
                    for (var t = 0; t < this.lands.length; t++) this.lands[t].weapon && (this.isAiming = this.isAiming || this.lands[t].weapon.inputPointerDown(e))
                }
            }, {
                key: "pointerUp",
                value: function() {
                    this.isAiming = !1;
                    for (var e = 0; e < this.lands.length; e++) this.lands[e].weapon && this.lands[e].weapon.inputPointerUp()
                }
            }, {
                key: "fireProjectile",
                value: function(e, t, i, a, n) {
                    var o = {
                            position: t,
                            velocity: i
                        },
                        s = new Ne(this.game, e, o, a, !0);
                    s.setShootingSfx(n), this.projectiles.push(s), this.game.gameState.onProjectileFire(s)
                }
            }, {
                key: "getLocalPlayerLand",
                value: function() {
                    return this.playerLands[this.game.localPlayerIndex]
                }
            }, {
                key: "getLandOfIndex",
                value: function(e) {
                    return this.lands[e]
                }
            }, {
                key: "getCharacterOfIndex",
                value: function(e) {
                    return this.playerLands[e].character
                }
            }, {
                key: "clear",
                value: function() {
                    if (this.lands)
                        for (var e = 0; e < this.lands.length; e++) this.lands[e].destroy()
                }
            }, {
                key: "worldToBitMapSpace",
                value: function(e, t, i) {
                    var a = this.getLandOfIndex(i);
                    return a ? {
                        x: e -= a.renderSprite.position.x,
                        y: t -= a.renderSprite.position.y
                    } : (console.warn("Attempt to convert space to land that doesn't exist"), null)
                }
            }, {
                key: "puffAllProjectiles",
                value: function() {
                    for (var e = 0; e < this.projectiles.length; e++) this.projectiles[e].clear(), this.game.effectManager.spawnUnlockParticles(this.projectiles[e].sprite.position.x, this.projectiles[e].sprite.position.y, 20), this.game.soundManager.playSfx("upgrade_weapon");
                    this.nonLocalProjectilesManager.puffAllProjectiles()
                }
            }, {
                key: "getPointXBetweenPlayers",
                value: function() {
                    var e = this.playerLands[0].character.getCharacterWorld(),
                        t = this.playerLands[1].character.getCharacterWorld();
                    return (e.x + t.x) / 2
                }
            }]) && Be(t.prototype, i), a && Be(t, a), e
        }(),
        De = i(2);

    function We(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function Fe(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ue = function() {
        function e(t) {
            var i;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this._currentMoney = this._getStartingMoney(), this.game.DEBUG && console.log("STARTING MONEY: ".concat(this._currentMoney)), this._allWeapons = [
                [this.game.gameConfig.weaponType.SLING],
                [this.game.gameConfig.weaponType.CATAPULT],
                [this.game.gameConfig.weaponType.HARPOON],
                [this.game.gameConfig.weaponType.CANON],
                [this.game.gameConfig.weaponType.DUCKLING],
                [this.game.gameConfig.weaponType.SUNSCREEN],
                [this.game.gameConfig.weaponType.ICE_CREAM],
                [this.game.gameConfig.weaponType.GOLDEN_TURRET],
                [this.game.gameConfig.weaponType.BANANA_BOMB],
                [this.game.gameConfig.weaponType.WATER_BOMB],
                [this.game.gameConfig.weaponType.BEACH_BALL],
                [this.game.gameConfig.weaponType.BOOMERANG]
            ], this.MIX_LENGTH = 8, this._currentMix = [], this.TIER_KEYS = Object.keys(De.weaponSelectionConfig.TIERS), this._availableWeapons = (We(i = {}, De.weaponSelectionConfig.TIERS.TIER_0.key, []), We(i, De.weaponSelectionConfig.TIERS.TIER_1.key, []), We(i, De.weaponSelectionConfig.TIERS.TIER_2.key, []), We(i, De.weaponSelectionConfig.TIERS.TIER_3.key, []), i), this._resetAvailableWeapons()
        }
        var t, i, a;
        return t = e, (i = [{
            key: "_getStartingMoney",
            value: function() {
                for (var e = 0, t = 0; t < De.weaponSelectionConfig.STARTING_MONEY.length; t++) e += De.weaponSelectionConfig.STARTING_MONEY[t].possibility;
                var i = Math.random() * e;
                return i < De.weaponSelectionConfig.STARTING_MONEY[0].possibility ? De.weaponSelectionConfig.STARTING_MONEY[0].amount : i < De.weaponSelectionConfig.STARTING_MONEY[0].possibility + De.weaponSelectionConfig.STARTING_MONEY[1].possibility ? De.weaponSelectionConfig.STARTING_MONEY[1].amount : De.weaponSelectionConfig.STARTING_MONEY[2].amount
            }
        }, {
            key: "_resetAvailableWeapons",
            value: function() {
                for (var e = 0; e < this.TIER_KEYS.length; e++) {
                    this._availableWeapons[this.TIER_KEYS[e]] = [];
                    for (var t = 0; t < De.weaponSelectionConfig.TIERS[this.TIER_KEYS[e]].weapons.length; t++) {
                        var i = De.weaponSelectionConfig.TIERS[this.TIER_KEYS[e]].weapons[t];
                        this._availableWeapons[this.TIER_KEYS[e]].push(i)
                    }
                }
            }
        }, {
            key: "getWeaponMix",
            value: function() {
                var e = [];
                for (this._resetAvailableWeapons(), e.push(this._getUniqueRandomWeaponOfTier(De.weaponSelectionConfig.TIERS.TIER_0.key)), e.push(this._getUniqueRandomWeaponOfTier(De.weaponSelectionConfig.TIERS.TIER_1.key)), e.push(this._getUniqueRandomWeaponOfTier(De.weaponSelectionConfig.TIERS.TIER_2.key)), e.push(this._getUniqueRandomWeaponOfTier(De.weaponSelectionConfig.TIERS.TIER_3.key)); e.length < this.MIX_LENGTH;) {
                    var t = this._getUniqueRandomWeapon();
                    t && e.push(t)
                }
                return e
            }
        }, {
            key: "_getUniqueRandomWeaponOfTier",
            value: function(e) {
                if (this._availableWeapons[e].length <= 0) return console.warn("No weapons of ".concat(e, " available")), null;
                var t = Math.floor(Math.random() * this._availableWeapons[e].length),
                    i = this._availableWeapons[e][t];
                return this._availableWeapons[e].splice(t, 1), i
            }
        }, {
            key: "_getUniqueRandomWeapon",
            value: function() {
                var e;
                do {
                    e = Math.floor(Math.random() * this.TIER_KEYS.length)
                } while (0 === this._availableWeapons[this.TIER_KEYS[e]].length);
                return this._getUniqueRandomWeaponOfTier(this.TIER_KEYS[e])
            }
        }, {
            key: "selectWeapon",
            value: function(e) {
                
                // select debug weapon if debug mode is enabled
                if (this.game.DEBUG && null !== De.weaponSelectionConfig.debugWeapon) return De.weaponSelectionConfig.debugWeapon;

                var t, i = this._decideOnTier(this._currentMoney);
                //this.game.DEBUG && console.log("MONEY AT ROUND START: ".concat(this._currentMoney)), this._currentMoney -= this._getTierCost(i);
                console.log("Current Money: ".concat(this._currentMoney)), this._currentMoney -= this._getTierCost(i);
                for (var a = 0; a < e.length; a++)
                    if (i === this._getTierOfWeapon(e[a])) {
                        t = e[a];
                        break
                    } return this._currentMoney += this._getMoneyReward(i), t
            }
        }, {
            key: "_decideOnTier",
            value: function(e) {
                return e >= De.weaponSelectionConfig.TIER_COSTS[De.weaponSelectionConfig.TIERS.TIER_3.key] ? De.weaponSelectionConfig.TIERS.TIER_3.key : e >= De.weaponSelectionConfig.TIER_COSTS[De.weaponSelectionConfig.TIERS.TIER_2.key] ? De.weaponSelectionConfig.TIERS.TIER_2.key : e > De.weaponSelectionConfig.TIER_COSTS[De.weaponSelectionConfig.TIERS.TIER_1.key] ? De.weaponSelectionConfig.TIERS.TIER_1.key : De.weaponSelectionConfig.TIERS.TIER_0.key
            }
        }, {
            key: "_getTierCost",
            value: function(e) {
                return De.weaponSelectionConfig.TIER_COSTS[e]
            }
        }, {
            key: "_getMoneyReward",
            value: function(e) {
                var t = this.game.gameState.roundCount - 1,
                    i = Te.clamp(t, 0, De.weaponSelectionConfig.ROUND_MONEY.length - 1),
                    a = De.weaponSelectionConfig.ROUND_MONEY[i];
                return this.game.DEBUG && console.log("ROUND REWARD: ".concat(a)), a += this._getTierReward(e)
            }
        }, {
            key: "_getTierReward",
            value: function(e) {
                var t = Te.gaussianRandom() * De.weaponSelectionConfig.TIER_REWARD[e].delta,
                    i = De.weaponSelectionConfig.TIER_REWARD[e].average - De.weaponSelectionConfig.TIER_REWARD[e].delta / 2,
                    a = Te.clamp(Math.round(i + t), De.weaponSelectionConfig.TIER_REWARD[e].min, De.weaponSelectionConfig.TIER_REWARD[e].max);
                return this.game.DEBUG && console.log("WEAPON OF ".concat(e, " REWARD: ").concat(a)), a
            }
        }, {
            key: "_getTierOfWeapon",
            value: function(e) {
                return De.weaponSelectionConfig.TIER_OF_WEAPON[e]
            }
        }]) && Fe(t.prototype, i), a && Fe(t, a), e
    }();

    function Ge(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function He(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ve = function() {
        function e(t) {
            var i;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.weaponSelector = new Ue(this.game), this._weapons = {}, this._weaponLayoutIds = (Ge(i = {}, this.game.gameConfig.weaponType.SLING, "weapons_slingshot"), Ge(i, this.game.gameConfig.weaponType.CATAPULT, "weapons_catapult"), Ge(i, this.game.gameConfig.weaponType.HARPOON, "weapons_harpoon"), Ge(i, this.game.gameConfig.weaponType.CANON, "weapons_canon"), Ge(i, this.game.gameConfig.weaponType.DUCKLING, "weapons_05"), Ge(i, this.game.gameConfig.weaponType.SUNSCREEN, "weapons_06"), Ge(i, this.game.gameConfig.weaponType.ICE_CREAM, "weapons_07"), Ge(i, this.game.gameConfig.weaponType.GOLDEN_TURRET, "weapons_08"), Ge(i, this.game.gameConfig.weaponType.BANANA_BOMB, "weapons_09"), Ge(i, this.game.gameConfig.weaponType.WATER_BOMB, "weapons_10"), Ge(i, this.game.gameConfig.weaponType.BEACH_BALL, "weapons_11"), Ge(i, this.game.gameConfig.weaponType.BOOMERANG, "weapons_12"), i), this._weaponsToAdd = [], this.WHEEL_SLOTS = 8, this.isClear = !0, this.hasSpunFlag = !1, this.finishedTween = !0, this._dragVector = new Phaser.Point, this._startingDragPoint = new Phaser.Point, this._createUI(), this._populateWheel()
        }
        var t, i, a;
        return t = e, a = [{
            key: "_shuffleArray",
            value: function(e) {
                for (var t, i, a = e.length; a;) i = Math.floor(Math.random() * a--), t = e[a], e[a] = e[i], e[i] = t;
                return e
            }
        }], (i = [{
            key: "_createUI",
            value: function() {
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_wheel")), this.layout.setup(), this.game.localizer.initGroup(this.layout), this.game.groups.ui.add(this.layout), this.txtSpinWheel = this.layout.getElementById("textSpinWheel"), this.txtSpinWheel.visible = !1, this.lblWheel = this.layout.getElementById("wheelBg"), this.lblWheel.defaultPosition = this.lblWheel.shui.position.clone(), this.lblWheel.hiddenPosition = this.lblWheel.shui.position.clone(), this.lblWheel.hiddenPosition.y += 2 * this.lblWheel.height, this.lblWheel.shui.position.copyFrom(this.lblWheel.hiddenPosition), this.innerWheel = this.layout.getElementById("wheelCircle"), this.wheelPin = this.layout.getElementById("wheelPin"), this.sectionHighlight = this.layout.getElementById("wheelHighlight"), this.sectionHighlight.visible = !1, this.lblWheel.addChild(this.innerWheel), this.lblWheel.addChild(this.sectionHighlight), this.lblWheel.addChild(this.wheelPin), this._loadWeapons(), this._setUpTutorial()
            }
        }, {
            key: "_loadWeapons",
            value: function() {
                for (var e = Object.keys(this._weaponLayoutIds), t = 0; t < e.length; t++) {
                    var i = this._weaponLayoutIds[e[t]],
                        a = this.layout.getElementById(i);
                    a.defaultPosition = new Phaser.Point, a.defaultPosition.copyFrom(a.worldPosition), a.visible = !1, a.slotIndex = -1, a.bringToTop(), this._weapons[e[t]] = a
                }
            }
        }, {
            key: "_setUpTutorial",
            value: function() {
                this.layoutTutorial = new o.a.Layout(this.game, this.game.cache.getLayout("layout_tutorial")), this.layoutTutorial.setup(), this.game.groups.ui.add(this.layoutTutorial);
                var e = this.layoutTutorial.getElementById("cursor"),
                    t = this.layoutTutorial.getElementById("cursorDrag"),
                    i = this.layoutTutorial.getElementById("finger"),
                    a = this.layoutTutorial.getElementById("fingerDrag");
                this.game.device.desktop ? (this._tutorialPointer = e, this._tutorialPointerDrag = t) : (this._tutorialPointer = i, this._tutorialPointerDrag = a), e.visible = !1, t.visible = !1, i.visible = !1, a.visible = !1, this.wheelPin.addChild(this._tutorialPointer), this.wheelPin.addChild(this._tutorialPointerDrag), this.tutorialPointersPosition = new Phaser.Point, this._tutorialPointer.position = this.tutorialPointersPosition, this._tutorialPointerDrag.position = this.tutorialPointersPosition, this.tutorialPointersPosition.x = 120, this.tutorialPointersPosition.y = 120
            }
        }, {
            key: "showTutorialPointer",
            value: function() {
                var e = this;
                this._resetTutorialPointers(), this._tutorialPointer.visible = !0, this.tutorialAnimationPlaying || (this.tutorialAnimationPlaying = !0, this.timerBeforeTween = this.game.time.create(!0), this.timerBeforeTween.add(500, (function() {
                    e._tutorialPointer.visible = !1, e._tutorialPointerDrag.visible = !0, e.pointerTween = e.game.add.tween(e.tutorialPointersPosition).to({
                        x: -120
                    }, 1500, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1), e.pointerTween.onComplete.add((function() {
                        e.tutorialAnimationPlaying = !1, e._tutorialPointer.visible = !0, e._tutorialPointerDrag.visible = !1, e.timerAfterTween = e.game.time.create(!0), e.timerAfterTween.add(500, (function() {
                            e.showTutorialPointer()
                        })), e.timerAfterTween.start()
                    }))
                }), this), this.timerBeforeTween.start())
            }
        }, {
            key: "_resetTutorialPointers",
            value: function() {
                this.tutorialPointersPosition.x = 120, this.tutorialPointersPosition.y = 120, this._tutorialPointer.visible = !1, this._tutorialPointerDrag.visible = !1
            }
        }, {
            key: "showWheel",
            value: function() {
                var e = this;
                this.hasSpunFlag = !1, this.finishedTween = !1, this._clearWheel(), this._populateWheel(), this.game.soundManager.playSfx("wheel_appear", 1), this.game.add.tween(this.lblWheel.shui.position).to({
                    x: this.lblWheel.defaultPosition.x,
                    y: this.lblWheel.defaultPosition.y
                }, this.game.gameConfig.durationWheelTween, Phaser.Easing.Quadratic.InOut, !0).onComplete.add((function() {
                    e.finishedTween = !0, e._showSpinWheelText(), e.showTutorialPointer()
                }))
            }
        }, {
            key: "_clearWheel",
            value: function() {
                for (; 0 !== this._weaponsCurrentlyInWheel.length;) {
                    var e = this._weaponsCurrentlyInWheel.pop();
                    this._removeWeaponFromWheel(this._weapons[e])
                }
                this.isClear = !0
            }
        }, {
            key: "_removeWeaponFromWheel",
            value: function(e) {
                this.innerWheel.removeChild(e), e.position.copyFrom(e.defaultPosition), e.rotation = 0, e.slotIndex = -1, e.visible = !1
            }
        }, {
            key: "_populateWheel",
            value: function() {
                this.isClear || this._clearWheel(), this.isClear = !1, this.innerWheel.rotation = 0;
                var e = this.weaponSelector.getWeaponMix();
                for (this._weaponsToAdd = this._getWeponsToAdd(e), this._weaponsCurrentlyInWheel = []; 0 !== this._weaponsToAdd.length;) {
                    var t = Math.floor(Math.random() * (this._weaponsToAdd.length - 1)),
                        i = this._weaponsToAdd[t];
                    this._weaponsToAdd.splice(t, 1);
                    var a = this._weaponsCurrentlyInWheel.push(i);
                    this._addWeaponAtSlot(this._weapons[i], a - 1)
                }
            }
        }, {
            key: "_getWeponsToAdd",
            value: function(t) {
                for (var i = [], a = 0; a < t.length; a++) i.push(t[a]);
                return i = e._shuffleArray(i)
            }
        }, {
            key: "_addWeaponAtSlot",
            value: function(e, t) {
                this._removeWeaponFromWheel(e), this.innerWheel.addChild(e);
                var i = t * Math.PI / 4;
                e.position.rotate(this.innerWheel.position.x, this.innerWheel.position.y, i - Math.PI / 2, !1, 200), e.rotation = i, e.slotIndex = t, e.visible = !0
            }
        }, {
            key: "_showSpinWheelText",
            value: function() {
                this.txtSpinWheel.visible = !0, this.txtSpinWheel.scale.set(1, 1), this.txtSpinWheelTween || (this.txtSpinWheelTween = this.game.add.tween(this.txtSpinWheel.scale).to({
                    x: 1.2,
                    y: 1.2
                }, 1500, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0))
            }
        }, {
            key: "hideWheel",
            value: function() {
                var e = this;
                this.game.soundManager.playSfx("wheel_disappear", 1), this.finishedTween = !1, this.game.add.tween(this.lblWheel.shui.position).to({
                    x: this.lblWheel.hiddenPosition.x,
                    y: this.lblWheel.hiddenPosition.y
                }, this.game.gameConfig.durationWheelTween, Phaser.Easing.Quadratic.InOut, !0).onComplete.add((function() {
                    e.finishedTween = !0
                }))
            }
        }, {
            key: "inputPointerDown",
            value: function(e) {
                this.ableToSpin() && (this._activePointer || (this._activePointer = e, this._startingDragPoint.copyFrom(this._activePointer.position)))
            }
        }, {
            key: "inputPointerUp",
            value: function() {
                this._activePointer && this.ableToSpin() && (this._dragVector.copyFrom(this._activePointer.position), this._dragVector.x -= this._startingDragPoint.x, this._dragVector.y -= this._startingDragPoint.y, this._dragVector.getMagnitudeSq() > .1 * this.game.width * this.game.width * .1 && this.spinTheWheel(), this._activePointer = null)
            }
        }, {
            key: "spinTheWheel",
            value: function() {
                var e = this;
                this.hasSpunFlag = !0, this._hideSpinWheelText(), this._hideTutorialPointer();
                var t = this.weaponSelector.selectWeapon(this._weaponsCurrentlyInWheel),
                    i = this._weapons[t].slotIndex,
                    a = this._getNumberOfRotations(this._dragVector),
                    n = this._getRotationSign(this._dragVector);
                this.rotateToSlot(i, a, n, (function() {
                    e.game.gameState.changeWeaponOfLocalPlayer(t);
                    var i = e.game.time.create(!0);
                    i.add(1e3 * e.game.sc.delayBetweenStopAndHide, (function() {
                        e.hideWheel(), e._stopBlinkingSectionHighlight()
                    })), i.start()
                }))
            }
        }, {
            key: "_hideSpinWheelText",
            value: function() {
                this.txtSpinWheel.visible = !1, this.txtSpinWheel.scale.set(1, 1), this.txtSpinWheelTween && (this.txtSpinWheelTween.stop(), this.txtSpinWheelTween = null)
            }
        }, {
            key: "_hideTutorialPointer",
            value: function() {
                this._resetTutorialPointers(), this.tutorialAnimationPlaying = !1, this.pointerTween && (this.pointerTween.stop(), this.pointerTween = null), this.timerBeforeTween && (this.timerBeforeTween.stop(!0), this.timerBeforeTween = null), this.timerAfterTween && (this.timerAfterTween.stop(!0), this.timerAfterTween = null)
            }
        }, {
            key: "_getRotationSign",
            value: function(e) {
                var t = 1;
                if (this._activePointer) {
                    var i = new Phaser.Point(this._startingDragPoint.x - this.innerWheel.worldPosition.x, this._startingDragPoint.y - this.innerWheel.worldPosition.y);
                    t = Math.abs(e.x) >= Math.abs(e.y) ? i.y <= 0 ? e.x >= 0 ? 1 : -1 : e.x >= 0 ? -1 : 1 : i.x >= 0 ? e.y <= 0 ? -1 : 1 : e.y <= 0 ? 1 : -1
                }
                return t
            }
        }, {
            key: "_getNumberOfRotations",
            value: function(e) {
                var t = 2;
                if (this._activePointer) {
                    var i = e.getMagnitudeSq();
                    t = i > .4 * this.game.width * this.game.width * .4 ? 4 : i > .3 * this.game.width * this.game.width * .3 ? 3 : i > .2 * this.game.width * this.game.width * .2 ? 2 : 1
                }
                return t
            }
        }, {
            key: "rotateToSlot",
            value: function(e, t, i, a) {
                var n = this,
                    o = this._getRotationOfSlot(e);
                o += i * Math.max(1, t) * 2 * Math.PI;
                var s = this.game.add.tween(this.innerWheel).to({
                    rotation: o
                }, 1e3 * this.game.sc.durationWheelRotate, Phaser.Easing.Quadratic.Out, !0, 0, 0, !1);
                s.onUpdateCallback((function() {
                    var e = n.innerWheel.rotation % (Math.PI / 4);
                    Math.abs(e) <= .4 && n.game.soundManager.playSfx("wheel_spinning", 1)
                })), s.onComplete.add((function() {
                    var t = n.innerWheel.rotation % (2 * Math.PI);
                    n.innerWheel.rotation = t - 2 * Math.PI, n._playSelectionEffect(e), a && a()
                }))
            }
        }, {
            key: "_playSelectionEffect",
            value: function(e) {
                this.game.soundManager.playSfx("wheel_stop", 1), this._startBlinkingSectionHighlight(e)
            }
        }, {
            key: "_startBlinkingSectionHighlight",
            value: function(e) {
                this.innerWheel.addChild(this.sectionHighlight), this.sectionHighlight.rotation = -this._getRotationOfSlot(e);
                var t = this._weaponsCurrentlyInWheel[e];
                this._weapons[t].bringToTop(), this.sectionHighlight.visible = !0, this._blinkSectionHighlight = !0
            }
        }, {
            key: "_stopBlinkingSectionHighlight",
            value: function() {
                this._blinkSectionHighlight = !1, this.sectionHighlight.visible = !1, this.innerWheel.removeChild(this.sectionHighlight), this.sectionHighlight.rotation = 0
            }
        }, {
            key: "update",
            value: function(e) {
                this.game.DEBUG && this._activePointer
            }
        }, {
            key: "_selectWeaponWheel",
            value: function(e) {
                this._setWheelRotationToSlot(e)
            }
        }, {
            key: "_setWheelRotationToSlot",
            value: function(e) {
                this.innerWheel.rotation = this._getRotationOfSlot(e)
            }
        }, {
            key: "_getRotationOfSlot",
            value: function(e) {
                return -e * Math.PI / 4
            }
        }, {
            key: "ableToSpin",
            value: function() {
                return this.finishedTween && !this.hasSpunFlag
            }
        }, {
            key: "setWheelOfWeaponsActive",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.layout.visible = e, this.layoutTutorial.visible = e
            }
        }]) && He(t.prototype, i), a && He(t, a), e
    }();

    function Ke(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function ze(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ye = function() {
        function e(t, i) {
            var a;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.game = t, this.localLeft = i, this._weaponsPreview = (Ke(a = {}, this.game.gameConfig.weaponType.SLING, "weapon_01"), Ke(a, this.game.gameConfig.weaponType.CATAPULT, "weapon_03"), Ke(a, this.game.gameConfig.weaponType.HARPOON, "weapon_02"), Ke(a, this.game.gameConfig.weaponType.CANON, "weapon_04"), Ke(a, this.game.gameConfig.weaponType.DUCKLING, "weapon_05"), Ke(a, this.game.gameConfig.weaponType.SUNSCREEN, "weapon_06"), Ke(a, this.game.gameConfig.weaponType.ICE_CREAM, "weapon_07"), Ke(a, this.game.gameConfig.weaponType.GOLDEN_TURRET, "weapon_08"), Ke(a, this.game.gameConfig.weaponType.BANANA_BOMB, "weapon_09"), Ke(a, this.game.gameConfig.weaponType.WATER_BOMB, "weapon_10"), Ke(a, this.game.gameConfig.weaponType.BEACH_BALL, "weapon_11"), Ke(a, this.game.gameConfig.weaponType.BOOMERANG, "weapon_12"), a), this._createUI()
        }
        var t, i, a;
        return t = e, (i = [{
            key: "_createUI",
            value: function() {
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_weaponPreview")), this.layout.setup(), this.game.localizer.initGroup(this.layout), this.game.groups.ui.add(this.layout), this.groupLeft = this.layout.getElementById("weaponPreview_left"), this.groupLeft.defaultPosition = this.groupLeft.shui.position.clone(), this.groupLeft.hiddenPosition = this.groupLeft.shui.position.clone(), this.groupLeft.hiddenPosition.x -= 800, this.groupLeft.shui.position.copyFrom(this.groupLeft.hiddenPosition), this.groupLeft.visible = !1, this.groupRight = this.layout.getElementById("weaponPreview_right"), this.groupRight.defaultPosition = this.groupRight.shui.position.clone(), this.groupRight.hiddenPosition = this.groupRight.shui.position.clone(), this.groupRight.hiddenPosition.x += 800, this.groupRight.shui.position.copyFrom(this.groupRight.hiddenPosition), this.groupRight.visible = !1, this._weaponsLeft = {}, this._weaponsRight = {};
                for (var e = Object.keys(this.game.gameConfig.weaponType), t = 0; t < e.length; t++) {
                    var i = this._weaponsPreview[e[t]],
                        a = "".concat(i, "_left"),
                        n = this.layout.getElementById(a);
                    this._weaponsLeft[e[t]] = n, n.visible = !1;
                    var s = "".concat(i, "_right"),
                        r = this.layout.getElementById(s);
                    this._weaponsRight[e[t]] = r, r.visible = !1
                }
                this._backgroundColoursLeft = [], this._backgroundColoursRight = [];
                for (var l = 1; l <= 8; l++) {
                    var h = "color_0".concat(l),
                        c = "".concat(h, "_left"),
                        u = this.layout.getElementById(c);
                    this._backgroundColoursLeft.push(u), u.visible = !1;
                    var p = "".concat(h, "_right"),
                        g = this.layout.getElementById(p);
                    this._backgroundColoursRight.push(g), g.visible = !1
                }
                this._randomizeBackground(this._backgroundColoursLeft), this._randomizeBackground(this._backgroundColoursRight), this.txtLeft = this.layout.getElementById("varTextPreview_left"), this.txtRight = this.layout.getElementById("varTextPreview_right"), this.txtWaitLeft = this.layout.getElementById("textwait_left"), this.txtWaitLeft.visible = !1, this.txtWaitRight = this.layout.getElementById("textwait_right"), this.txtWaitRight.visible = !1, this.imgLoadingBall = this.layout.getElementById("loadingBall"), this.imgLoadingBall.visible = !1, this._setUpReferences()
            }
        }, {
            key: "_randomizeBackground",
            value: function(e) {
                e.currentColour && (e.currentColour.visible = !1);
                var t = Math.floor(Math.random() * e.length);
                e[t].visible = !0, e.currentColour = e[t]
            }
        }, {
            key: "_setUpReferences",
            value: function() {
                this.localLeft ? (this.localGroup = this.groupLeft, this.enemyGroup = this.groupRight, this.localWeapons = this._weaponsLeft, this.enemyWeapons = this._weaponsRight, this.localBackgrounds = this._backgroundColoursLeft, this.enemyBackgrounds = this._backgroundColoursRight, this.localText = this.txtLeft, this.enemyText = this.txtRight, this.textWaitingForEnemy = this.txtWaitRight) : (this.localGroup = this.groupRight, this.enemyGroup = this.groupLeft, this.localWeapons = this._weaponsRight, this.enemyWeapons = this._weaponsLeft, this.localBackgrounds = this._backgroundColoursRight, this.enemyBackgrounds = this._backgroundColoursLeft, this.localText = this.txtRight, this.enemyText = this.txtLeft, this.textWaitingForEnemy = this.txtWaitLeft), this.localText.setText(this.game.cm.loginName), this.enemyText.setText(this.game.cm.enemyName)
            }
        }, {
            key: "previewPlayerWeapon",
            value: function(e) {
                this._setPlayerWeapon(e), this._randomizeBackground(this.localBackgrounds), this.slideInGroup(this.localGroup), this._playerHasSelectedFlag = !0, this._enemyHasSelectedFlag ? this.slideInGroup(this.enemyGroup) : this._setWaitingActive(!0)
            }
        }, {
            key: "_setPlayerWeapon",
            value: function(e) {
                this.localWeaponCurrentlyVisible && (this.localWeaponCurrentlyVisible.visible = !1), this.localWeaponCurrentlyVisible = this.localWeapons[e], this.localWeaponCurrentlyVisible.visible = !0
            }
        }, {
            key: "previewEnemyWeapon",
            value: function(e) {
                this._setEnemyWeapon(e), this._randomizeBackground(this.enemyBackgrounds), this._playerHasSelectedFlag && (this.slideInGroup(this.enemyGroup), this._setWaitingActive(!1))
            }
        }, {
            key: "_setEnemyWeapon",
            value: function(e) {
                this.enemyWeaponCurrentlyVisible && (this.enemyWeaponCurrentlyVisible.visible = !1), this.enemyWeaponCurrentlyVisible = this.enemyWeapons[e], this.enemyWeaponCurrentlyVisible.visible = !0, this._enemyHasSelectedFlag = !0
            }
        }, {
            key: "_setWaitingActive",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.textWaitingForEnemy.visible = e, this.imgLoadingBall.visible = e
            }
        }, {
            key: "slideInGroup",
            value: function(e) {
                e.visible = !0, e.shui.position.copyFrom(e.hiddenPosition), this.game.add.tween(e.shui.position).to({
                    x: e.defaultPosition.x
                }, 1e3 * this.game.sc.durationWeaponPreviewTween, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1)
            }
        }, {
            key: "hidePreview",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.slideOutGroup(this.localGroup, e), this.slideOutGroup(this.enemyGroup), this._enemyHasSelectedFlag = !1, this._playerHasSelectedFlag = !1, this._setWaitingActive(!1)
            }
        }, {
            key: "slideOutGroup",
            value: function(e, t) {
                e.visible = !0, e.shui.position.copyFrom(e.defaultPosition), this.game.add.tween(e.shui.position).to({
                    x: e.hiddenPosition.x
                }, 1e3 * this.game.sc.durationWeaponPreviewTween, Phaser.Easing.Sinusoidal.InOut, !0, 0, 0, !1).onComplete.add((function() {
                    e.visible = !1, t && t()
                }))
            }
        }, {
            key: "update",
            value: function(e) {
                this.imgLoadingBall.rotation += 1 * e, this.game.DEBUG
            }
        }]) && ze(t.prototype, i), a && ze(t, a), e
    }();

    function Ze(e) {
        return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xe(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function qe(e, t) {
        return !t || "object" !== Ze(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Je(e, t, i) {
        return (Je = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Qe(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function Qe(e) {
        return (Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function $e(e, t) {
        return ($e = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var et = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), qe(this, Qe(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && $e(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function() {
                Je(Qe(t.prototype), "init", this).call(this, {
                    key: "gameState",
                    url: "data/gamePack.json"
                })
            }
        }, {
            key: "createOnce",
            value: function() {
                var e = this;
                Je(Qe(t.prototype), "createOnce", this).call(this), this.states = {
                    INTRO: "INTRO",
                    SHOOTING_TURN: "SHOOTING_TURN",
                    WEAPON_SELECTION: "WEAPON_SELECTION",
                    PROJECTILE_FOLLOW: "PROJECTILE_FOLLOW",
                    GAME_OVER: "GAME_OVER"
                }, this.cameraManager = new ve(this.game), this.game.effectManager = new we(this.game), window.fsToggleUI = function() {
                    e.fsToggleUI()
                }
            }
        }, {
            key: "create",
            value: function() {
                var e = this;
                Je(Qe(t.prototype), "create", this).call(this), this.game.gameState = this, this.game.cm.setGameState(this), this.game.stage.disableVisibilityChange = !0, this.arena = new je(this.game), this.gameStartedFlag = !1, this.gameIntroFlag = !1, this.winnerFound = !1, this.winnerIndex = -1, this.localProjectilesIndex = 0, this._opponentDisconnected = !1, this.elapsed = 0, this.game.windSpeed = 0, this.game.windSpeedLerp = 0, this.setupState = !1, this.currentState = null, this.playerSample = new Phaser.Point, this.dragLast = new Phaser.Point, null !== this.game.playerCharacter && void 0 !== this.game.playerCharacter || (this.game.playerCharacter = this.game.gameConfig.character.ZIG.key), this.lobbyUI = new Re(this.game, (function() {
                    e.game.cm.joinLobby()
                })), this._created = !0
            }
        }, {
            key: "setState",
            value: function(e) {
                this.currentState = e, this.setupState = !0
            }
        }, {
            key: "stateSetupRequired",
            value: function() {
                return !!this.setupState && (this.setupState = !1, !0)
            }
        }, {
            key: "setUpGame",
            value: function() {
                this.game.groups = {}, this.game.groups.bg = new Phaser.Group(this.game, this.game.world), this.game.groups.game = new Phaser.Group(this.game, this.game.world), this.game.groups.foreground = new Phaser.Group(this.game, this.game.world), this.game.groups.ui = new Phaser.Group(this.game, this.game.world), this.game.groups.ui.fixedToCamera = !0, this.lobbyUI.sendToFront(this.game.groups.ui), this.game.stage.backgroundColor = 2236962, this._setUpPlayers(), this.roundCount = 0, this.game.cm.isHost() && (this.arena.init(this.game.cm.isHost()), this.game.cm.pushArenaLand(this.arena.landBuildingParameters), this._initializeGame())
            }
        }, {
            key: "_initializeGame",
            value: function() {
                this._initializeLocalArena(), this.setupState = !0, this.setState(this.states.INTRO), this.arena.playerLands[this.game.localPlayerIndex].weapon.setReadyToFire(!1), this.cameraManager.setPlayerInputLock(!0)
            }
        }, {
            key: "_initializeLocalArena",
            value: function() {
                this.cameraManager.init(), this._createBG(), this.cameraManager.zoomCamera(-1), this.cameraManager.centerCameraOn({
                    x: this.arena.getPointXBetweenPlayers(),
                    y: .5 * this.camera.bounds.height
                })
            }
        }, {
            key: "_setUpPlayers",
            value: function() {
                this.game.playerConfig = {
                    players: [{
                        local: 0 === this.game.cm.playerId,
                        weaponType: this.game.gameConfig.weaponType.SLING
                    }, {
                        local: 1 === this.game.cm.playerId,
                        weaponType: this.game.gameConfig.weaponType.SLING
                    }]
                }, this.game.playerConfig.players[0].local ? (this.game.localPlayerIndex = 0, this.game.otherPlayerIndex = 1) : (this.game.localPlayerIndex = 1, this.game.otherPlayerIndex = 0), this.game.playerCharacter === this.game.gameConfig.character.SHARKO.key ? this.game.playerConfig.players[0].local ? this._LeftSharkoRightZig() : this._LeftZigRightSharko() : this.game.playerConfig.players[0].local ? this._LeftZigRightSharko() : this._LeftSharkoRightZig()
            }
        }, {
            key: "_LeftZigRightSharko",
            value: function() {
                this.game.playerConfig.players[0].character = this.game.gameConfig.character.ZIG, this.game.playerConfig.players[1].character = this.game.gameConfig.character.SHARKO, this.game.playerConfig.players[0].flipped = !1, this.game.playerConfig.players[1].flipped = !1
            }
        }, {
            key: "_LeftSharkoRightZig",
            value: function() {
                this.game.playerConfig.players[0].character = this.game.gameConfig.character.SHARKO, this.game.playerConfig.players[1].character = this.game.gameConfig.character.ZIG, this.game.playerConfig.players[0].flipped = !0, this.game.playerConfig.players[1].flipped = !0
            }
        }, {
            key: "_createBG",
            value: function() {
                this.bgRoot = new Phaser.Group(this.game), this.game.groups.bg.add(this.bgRoot);
                var e = this.arena.lengthTotal + 150,
                    t = 0,
                    i = 1;
                this.cameraManager.camera.width / this.cameraManager.camera.height < 1.3 ? (t = 2300, i = 2303 / 2048) : t = 2048, this.bgSky = new Phaser.TileSprite(this.game, -75, 0, e - 75, t, "sky"), this.bgSky.tileScale.x = e / 2048 * 2, this.cameraManager.camera.width / this.cameraManager.camera.height < 1.3 && (this.bgSky.tileScale.y = i), this.bgSky.anchor.set(0, 1), this.bgRoot.add(this.bgSky), this.clouds = new Phaser.TileSprite(this.game, -75, 0, e - 75, 470, "ingameCloud"), this.clouds.tileScale.x = e / 2048 * 2, this.clouds.position.set(-75, -500), this.clouds.anchor.set(0, 1), this.bgRoot.add(this.clouds), this.cloudsFront = new Phaser.TileSprite(this.game, -75, 0, e - 75, 470, "ingameCloud"), this.cloudsFront.tileScale.x = e / 2048 * 2, this.cloudsFront.position.set(-75, -500), this.cloudsFront.anchor.set(0, 1), this.cloudsFront.scale.set(2, 2), this.cloudsFront.alpha = .5, this.game.groups.foreground.add(this.cloudsFront), this.waterFront = new Phaser.TileSprite(this.game, -75, 0, e + 1024, 512, "ingameWaterFront"), this.game.groups.foreground.add(this.waterFront), this.waterFront.position.y = -100, this.waterFront.position.x = -512, this.waterFront.startPos = new Phaser.Point, this.waterFront.startPos.copyFrom(this.waterFront.position), this.waterFront2 = new Phaser.TileSprite(this.game, -75, 0, e + 1024, 512, "ingameWaterFront"), this.game.groups.foreground.add(this.waterFront2), this.waterFront2.position.y = -100, this.waterFront2.position.x = -512, this.waterFront2.startPos = new Phaser.Point, this.waterFront2.startPos.copyFrom(this.waterFront2.position);
                var a = Math.random() < .5 ? "ingameIslandLeft1" : "ingameIslandLeft2",
                    n = new Phaser.Sprite(this.game, 0, 0, a);
                this.bgRoot.add(n), n.position.set(-75, -n.height - 220), a = Math.random() < .5 ? "ingameIslandRight1" : "ingameIslandRight2";
                var o = new Phaser.Sprite(this.game, 0, 0, a);
                this.bgRoot.add(o), o.anchor.set(1, 0), o.position.set(50 + e, -o.height - 220);
                var s = new Phaser.Sprite(this.game, 0, 0, "ingameSun");
                this.bgRoot.add(s), s.anchor.set(.5, .5), s.position.set(.5 * e, -1250), this.game.add.tween(s.scale).to({
                    x: 1.1,
                    y: 1.1
                }, 1500, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.game.add.tween(s).to({
                    rotation: .1 * Math.PI
                }, 3100, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0)
            }
        }, {
            key: "buildNonHostLand",
            value: function(e) {
                this.arena.init(this.game.cm.isHost(), e), this._initializeGame()
            }
        }, {
            key: "handleGameIntro",
            value: function(e) {
                this.gameIntroFlag = !0, this.game.DEBUG_NETWORK && console.log("handle intro event");
                var t = this.arena.getLocalPlayerLand();
                this.gameUI = new Pe(this.game, t), this.weaponPreviewUI = new Ye(this.game, t.left), this.wheelOfWeapons = new Ve(this.game), this.gameUI.showPositionIndicator()
            }
        }, {
            key: "gameStart",
            value: function() {
                this.gameStartedFlag = !0, this.game.DEBUG_NETWORK && console.log("start game!"), this.gameUI.hidePositionIndicator()
            }
        }, {
            key: "handleWeaponSelection",
            value: function(e) {
                this.game.DEBUG_NETWORK && console.log("handle weapon selection event"), this.gameStartedFlag || this.gameStart(), this._startWeaponSelection()
            }
        }, {
            key: "_startWeaponSelection",
            value: function() {
                this.setState(this.states.WEAPON_SELECTION)
            }
        }, {
            key: "handleShootingTurn",
            value: function(e) {
                this.game.DEBUG_NETWORK && console.log("handle shooting turn"), this.gameStartedFlag || this.gameStart(), this._startShootingTurn()
            }
        }, {
            key: "_startShootingTurn",
            value: function() {
                this.setState(this.states.SHOOTING_TURN)
            }
        }, {
            key: "update",
            value: function(e) {
                Je(Qe(t.prototype), "update", this).call(this, e);
                var i = this.game.time.elapsedMS / 1e3;
                if (i > .1 && (i = .1), this.game.soundManager.update(i), this.game.cm.pullMessages(), this.gameIntroFlag) {
                    this.elapsed += i;
                    var a = Math.min(i * this.game.sc.windChangeSpeed, 1);
                    this.game.windSpeedLerp = Phaser.Math.linear(this.game.windSpeedLerp, this.game.windSpeed, a), this._updateScenario(i), this._updateState(i), this._updateInputs(), this.arena.update(i), this.cameraManager.update(i), this.game.effectManager.update(i), this.gameUI.update(i), this.weaponPreviewUI.update(i), this.wheelOfWeapons.update(i), this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.wheelOfWeapons.ableToSpin() && this.wheelOfWeapons.spinTheWheel(), this.game.cm.pushMessages(i)
                } else this.lobbyUI.update(i)
            }
        }, {
            key: "_updateState",
            value: function(e) {
                var t = this;
                switch (this.currentState) {
                    case this.states.INTRO:
                        this.stateSetupRequired() && this.cameraManager.setPlayerInputLock(!0);
                        break;
                    case this.states.WEAPON_SELECTION:
                        if (this.stateSetupRequired()) {
                            this.roundCount++, this.gameUI.setRoundText(this.roundCount), this.gameUI.setActiveTimeBar(!1);
                            var i = this.arena.playerLands[this.game.localPlayerIndex].weapon;
                            i.setReadyToFire(!1), i.cancelAiming(), this.cameraManager.setPlayerInputLock(!0), this.wheelOfWeapons.showWheel()
                        }
                        break;
                    case this.states.SHOOTING_TURN:
                        if (this.stateSetupRequired()) {
                            this.wheelOfWeapons.ableToSpin() && this.wheelOfWeapons.spinTheWheel(), this.countdownOngoing = !1, this.shootingPeriod = !1;
                            var a = this.game.time.create(!0),
                                n = this.game.sc.durationWheelRotate + this.game.sc.delayBetweenStopAndHide + this.game.sc.durationWeaponPreview + this.game.sc.durationWeaponPreviewTween;
                            a.add(1e3 * n, (function() {
                                t.weaponPreviewUI.hidePreview((function() {
                                    t.gameUI.setTimeBarValue(1), t.gameUI.setActiveTimeBar(!0), t.shootingPeriod = !0, t.durationShootingTurn = t.game.sc.durationShootingTurn;
                                    var e = t.arena.playerLands[t.game.localPlayerIndex].weapon;
                                    e.getChargeWorld(t.playerSample), e.setReadyToFire(!0), t.cameraManager.setPlayerInputLock(!1)
                                }))
                            }), this), a.start()
                        }
                        if (this.shootingPeriod && (this.durationShootingTurn -= e, this.gameUI.setTimeBarValue(this.durationShootingTurn / this.game.sc.durationShootingTurn), this.durationShootingTurn <= 0)) {
                            this.gameUI.setActiveTimeBar(!1);
                            var o = this.arena.playerLands[this.game.localPlayerIndex].weapon;
                            o.setReadyToFire(!1), o.cancelAiming(), this.cameraManager.setPlayerInputLock(!0)
                        }
                        break;
                    case this.states.PROJECTILE_FOLLOW:
                        this.stateSetupRequired() && (this.changeStateDelay = 1.5), this.followingProjectile && !1 === this.followingProjectile.alive && (this.followingProjectile = null), this.followingProjectile || (this.changeStateDelay -= e, this.changeStateDelay <= 0 && !1 === this.winnerFound && this.setState(this.states.PLAYER_TURN));
                        break;
                    case this.states.GAME_OVER:
                        if (this.stateSetupRequired()) {
                            if (this.arena.puffAllProjectiles(), this._opponentDisconnected) this.gameUI.showDisconnectText();
                            else {
                                var s = this.winnerIndex === this.game.localPlayerIndex;
                                this.gameUI.showGameOverText(s)
                            }
                            this.winnerKey === this.game.gameConfig.character.ZIG.key ? this.game.soundManager.playSfx("sel_Zig", 1) : this.game.soundManager.playSfx("sel_Sharko", 1);
                            var r = this.arena.getCharacterOfIndex(this.winnerIndex).opponent,
                                l = new Phaser.Point;
                            r.getCharacterWorld(l), this.cameraManager.panTo(l.x, l.y, .5), this.cameraManager.centerCameraOn(l), this.delay = 3, this.zoomLerpValue = 0, this.zoomTime = 0, this.maxZoomTime = 2
                        }
                        this.delay -= e, this.zoomTime < this.maxZoomTime && (this.zoomTime += e, this.previousZoomValue = this.zoomLerpValue, this.zoomLerpValue = Phaser.Easing.Quadratic.InOut(this.zoomTime / this.maxZoomTime), this.cameraManager.zoomCamera(.5 * (this.zoomLerpValue - this.previousZoomValue))), this.delay <= 0 && this.transitionToEndScreen()
                }
            }
        }, {
            key: "changeWeaponOfLocalPlayer",
            value: function(e) {
                var t = this.game.localPlayerIndex;
                this.game.cm.sendWeaponChangeEvent(e), this.arena.playerLands[t].weapon.setWeaponType(e), this.weaponPreviewUI.previewPlayerWeapon(e)
            }
        }, {
            key: "_updateScenario",
            value: function(e) {
                var t = this.game.camera,
                    i = (Math.abs(t.view.y) - t.view.height) / (Math.abs(t.bounds.y) - t.view.height),
                    a = Math.abs(t.view.x) / (Math.abs(t.bounds.width) - t.view.width);
                this.bgRoot.position.y = 200 * -i + 250, this.bgRoot.position.x = 300 * a, this.waterFront.position.x = this.waterFront.startPos.x + 40 * Math.sin(this.elapsed), this.waterFront.position.y = this.waterFront.startPos.y + 15 * Math.cos(this.elapsed), this.waterFront2.position.x = this.waterFront2.startPos.x + 40 * Math.sin(this.elapsed + Math.PI), this.waterFront2.position.y = this.waterFront2.startPos.y + 15 * Math.cos(this.elapsed + Math.PI), this.clouds.tilePosition.x += this.game.windSpeedLerp * e * .6, this.cloudsFront.tilePosition.x += this.game.windSpeedLerp * e * .8, this.waterFront.tilePosition.x += this.game.windSpeedLerp * e * 1.2, this.waterFront2.tilePosition.x += this.game.windSpeedLerp * e * 1.2
            }
        }, {
            key: "_updateInputs",
            value: function() {
                var e = this.game.input.activePointer;
                if (e.realWorldX = e.worldX / this.game.camera.scale.x, e.realWorldY = e.worldY / this.game.camera.scale.x, !e.isDown) return this.inputWasDown && (this.arena.pointerUp(), this.wheelOfWeapons.inputPointerUp()), this.inputWasDown = !1, void this.dragLast.set(0, 0);
                this.inputWasDown || (this.arena.pointerDown(e), this.wheelOfWeapons.inputPointerDown(e)), this.inputWasDown = !0, this.inputWasDown && !this.arena.isAiming && (0 === this.dragLast.x && 0 === this.dragLast.y && this.dragLast.copyFrom(e), this.dragLast.copyFrom(e))
            }
        }, {
            key: "onProjectileFire",
            value: function(e) {}
        }, {
            key: "changeEnemyWeapon",
            value: function(e) {
                this.arena.playerLands[this.game.otherPlayerIndex].weapon.setWeaponType(e), this.weaponPreviewUI.previewEnemyWeapon(e)
            }
        }, {
            key: "playerHit",
            value: function(e, t) {
                this.winnerFound = !0, e.setState(e.state.DEAD), e.tintDead(), this.winnerKey = e.opponent.config.character.key, this.winnerIndex = e.opponent.playerIndex, t && this.game.cm.sendPlayerHitEvent(this.winnerIndex);
                var i = this.arena.playerLands[this.game.localPlayerIndex].weapon;
                i.setReadyToFire(!1), i.cancelAiming(), this.gameUI.setActiveTimeBar(!1), this.arena.puffAllProjectiles()
            }
        }, {
            key: "transitionToEndScreen",
            value: function() {
                var e = this.arena.playerLands[this.winnerIndex].character,
                    t = this.arena.getLocalPlayerLand();
                this.game.state.start("end", !0, !1, {
                    money: t.character.money,
                    rounds: this.roundCount,
                    winner: e.config.character.key
                })
            }
        }, {
            key: "resize",
            value: function() {
                this._created && this.lobbyUI.startGameCallbackFired && this.cameraManager.resize()
            }
        }, {
            key: "shutdown",
            value: function() {
                this._created && (this._created = !1, this.cameraManager.setToDefault(), this.arena && this.arena.clear(), this.game.effectManager && this.game.effectManager.clearParticles()), this.game.stage.disableVisibilityChange = !1, Je(Qe(t.prototype), "shutdown", this).call(this)
            }
        }, {
            key: "fsToggleUI",
            value: function() {
                this.game.groups.ui && (this.game.groups.ui.visible = !this.game.groups.ui.visible)
            }
        }, {
            key: "handleOpponentDisconnected",
            value: function() {
                this._opponentDisconnected = !0, this.wheelOfWeapons.setWheelOfWeaponsActive(!1), this.weaponPreviewUI.layout.visible = !1;
                var e = this.arena.getCharacterOfIndex(this.game.otherPlayerIndex);
                e.setState(e.state.DISCONNECTED)
            }
        }]) && Xe(i.prototype, a), n && Xe(i, n), t
    }(K);

    function tt(e) {
        return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function it(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function at(e, t) {
        return !t || "object" !== tt(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function nt(e, t, i) {
        return (nt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ot(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function ot(e) {
        return (ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function st(e, t) {
        return (st = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var rt = function(e) {
        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), at(this, ot(t).apply(this, arguments))
        }
        var i, a, n;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && st(e, t)
        }(t, e), i = t, (a = [{
            key: "init",
            value: function(e) {
                nt(ot(t.prototype), "init", this).call(this, {
                    key: "menuState",
                    url: "data/menuPack.json"
                }), this.stateData = e, this.game.DEBUG && (console.log(this.stateData), console.log(this.stateData.winner))
            }
        }, {
            key: "createOnce",
            value: function() {
                nt(ot(t.prototype), "createOnce", this).call(this)
            }
        }, {
            key: "create",
            value: function() {
                nt(ot(t.prototype), "create", this).call(this), this.game.stage.disableVisibilityChange = !1, this.createUI()
            }
        }, {
            key: "createUI",
            value: function() {
                var e = this;
                this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_end")), this.layout.setup(), this.game.world.add(this.layout), this.game.localizer.initGroup(this.layout);
                var t = this.layout.getElementById("buttonSound");
                E.updateSoundButtonState(this.game, t), t.onInputUp.add((function() {
                    return E.handleSoundButtonPress(e.game, t, e.game.soundManager, e.game.soundManager.radioAudioStream)
                })), this.layout.getElementById("buttonAgain").onInputUp.add((function(t, i, a) {
                    a && e.game.state.start("characterSelection")
                })), this.layout.getElementById("buttonReturn").onInputUp.add((function(t, i, a) {
                    a && e.game.state.start("menu", !0, !1, !1)
                }));
                var i = this.layout.getElementById("varTextCoins"),
                    a = this.layout.getElementById("varTextRounds");
                i.text = this.stateData.money, a.text = this.stateData.rounds;
                var n = this.layout.getElementById("varImageWinner");
                this.stateData.winner === this.game.gameConfig.character.ZIG.key && (n.frameName = "zigWins");
                var s = this.layout.getElementById("varTextWinner");
                this.stateData.winner === this.game.playerCharacter ? (s.shui.locale.changeMessage("__win"), s.shui.locale.format(), this.game.soundManager.playSfx("end_win", 1), this.createParticles()) : (s.shui.locale.changeMessage("__lose"), s.shui.locale.format(), this.game.soundManager.playSfx("end_loss", 1)), this.game.gameUtils.attachButtonSoundTraverse(this.layout, (function() {
                    e.game.soundManager.playSfx("button", .7, 1, .2)
                }))
            }
        }, {
            key: "createParticles",
            value: function() {
                this.particles = [];
                for (var e = 0; e < 50; e++) {
                    var t = this.game.width * Math.random(),
                        i = -1e3 * Math.random(),
                        a = "confetti_0".concat(Math.floor(5 * Math.random()) + 1),
                        n = new Phaser.Sprite(this.game, t, i, "fx", a);
                    this.game.world.add(n), n.anchor.set(.5), n.rotation = Math.random() * Math.PI;
                    var o = 1 + 1 * Math.random();
                    n.scale.set(o, o), n.rotationFactor = Math.random() - .5, n.vel = {
                        x: 0,
                        y: 150 + 150 * Math.random()
                    }, this.particles.push(n)
                }
            }
        }, {
            key: "update",
            value: function() {
                nt(ot(t.prototype), "update", this).call(this);
                var e = this.game.time.elapsedMS / 1e3;
                e > .1 && (e = .1), this.game.soundManager.update(e);
                for (var i = 0; i < this.particles.length; i++) {
                    var a = this.particles[i];
                    a.position.y += a.vel.y * e, a.position.x += Math.sin(a.position.y / 50) * e * 100, a.alpha = 1 - Math.min(a.position.y / (1.25 * this.game.height), 1), a.position.y > this.game.height + 200 && (a.parent.remove(a), this.particles.splice(i, 1), i--)
                }
            }
        }, {
            key: "resize",
            value: function() {
                nt(ot(t.prototype), "resize", this).call(this)
            }
        }, {
            key: "shutdown",
            value: function() {
                nt(ot(t.prototype), "shutdown", this).call(this), this.game.effectManager && this.game.effectManager.clearParticles()
            }
        }]) && it(i.prototype, a), n && it(i, n), t
    }(K);

    function lt(e) {
        return (lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ht(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function ct(e, t) {
        return !t || "object" !== lt(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ut(e, t, i) {
        return (ut = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            var a = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = pt(e)););
                return e
            }(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value
            }
        })(e, t, i || e)
    }

    function pt(e) {
        return (pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function gt(e, t) {
        return (gt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var dt = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ct(this, pt(t).apply(this, arguments))
            }
            var i, a, n;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && gt(e, t)
            }(t, e), i = t, (a = [{
                key: "init",
                value: function(e) {
                    ut(pt(t.prototype), "init", this).call(this, {
                        key: "base",
                        url: "data/basePack.json"
                    }), this.errorType = e
                }
            }, {
                key: "createOnce",
                value: function() {
                    ut(pt(t.prototype), "createOnce", this).call(this), this.sc = this.game.sc
                }
            }, {
                key: "create",
                value: function() {
                    ut(pt(t.prototype), "create", this).call(this), this.game.stage.disableVisibilityChange = !1, this.game.cm.disconnect(), this.connectError = this.sc.connectError, this.createUI()
                }
            }, {
                key: "createUI",
                value: function() {
                    var e = this;
                    this.layout = new o.a.Layout(this.game, this.game.cache.getLayout("layout_nameInput")), this.layout.setup(), this.game.world.add(this.layout), this.game.localizer.initGroup(this.layout);
                    var t = this.layout.getElementById("buttonSound");
                    E.updateSoundButtonState(this.game, t), t.onInputUp.add((function() {
                        return E.handleSoundButtonPress(e.game, t, e.game.soundManager, e.game.soundManager.radioAudioStream)
                    })), this.errorMessage = this.layout.getElementById("varTextErrorInput"), this.errorMessage.visible = !0, this.buttonContinue = this.layout.getElementById("button_1"), this.buttonContinue.visible = !0, this.buttonContinue.onInputUp.add((function() {
                        e.game.state.start("boot")
                    })), this.game.add.tween(this.buttonContinue.scale).to({
                        x: .75,
                        y: .75
                    }, 750, Phaser.Easing.Sinusoidal.InOut, !0, 0, -1, !0), this.layout.getElementById("input_1").visible = !1, this.layout.getElementById("nameInputborder_1").visible = !1, this.layout.getElementById("textNameInput").visible = !1, this.layout.getElementById("wood_1").visible = !1, this.game.gameUtils.attachButtonSoundTraverse(this.game.world, (function() {
                        e.game.soundManager.playSfx("button", 1, 1, .3)
                    })), this._setUpError()
                }
            }, {
                key: "_setUpError",
                value: function() {
                    this.errorType === this.connectError.BADWORD ? this.errorMessage.shui.locale.changeMessage("__error_badName") : this.errorType === this.connectError.DUPLICATE ? this.errorMessage.shui.locale.changeMessage("__error_nameTaken") : this.errorType === this.connectError.INVALID_DATA ? this.errorMessage.text = this.sc.TEXT.invalidData : this.game.cm.connectedOnce ? this.errorMessage.shui.locale.changeMessage("__error_lostConnection") : this.errorMessage.shui.locale.changeMessage("__error_couldNotConnect"), this.errorMessage.shui.locale.format()
                }
            }]) && ht(i.prototype, a), n && ht(i, n), t
        }(K),
        mt = (i(460), i(461), ["de-DE", "en-US", "es-ES", "fr-FR", "pt-BR"]),
        ft = new a.a({
            width: 1280,
            height: 720,
            phaserParameters: {
                disableVisibilityChange: !1,
                renderer: Phaser.CANVAS,
                roundPixels: !1
            },
            enableDebug: !1,
            locale: {
                locales: mt,
                fallbackLocale: "en-US",
                locale: navigator.language
            }
        });
    ft.state.add("boot", new D), ft.state.add("nameInput", new ee), ft.state.add("menu", new re), ft.state.add("game", new et), ft.state.add("characterSelection", new fe), ft.state.add("end", new rt), ft.state.add("error", new dt), ft.state.start("boot", !0, !1)
}]);
