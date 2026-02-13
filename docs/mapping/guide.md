<div style="text-align: center;">
  <img src="/mapping/kzmapping.png" alt="Mapping" style="max-width: 700px; display: block; margin: 0 auto 20px;">
</div>

# Mapping for CS2KZ

The aim of this document is to help guide new and experienced mappers towards improving the quality of their CS2KZ maps in preparation for global map approval. Following this guide will provide insight and resolutions to issues that may prevent your map from being approved. This document is written under the assumption that you have previous experience using the Hammer map editor.

## Design

To secure a spot in the *Global Map pool*, your map requires functional gameplay and a level of visual polish that goes beyond the basics. Maps that consist of "box rooms" with flat textures tiled across large surfaces are typically rejected, as they lack the environmental depth expected for global standards.

Break up large empty spaces by introducing geometry which disrupts the room's silhouette. Adding structural elements such as pillars, recessed wall panels, or trim where surfaces meet can create natural highlights and shadows, transforming a hollow shell into a lively space.

Avoid employing a "jumps along a wall" design where the player simply follows a linear path through a box corridor. Instead, utilize the full 3D volume of your room to force changes in elevation and direction. Integrate your platforms into the environment itself rather than using generic floating blocks, have players navigate across protruding vents, hanging machinery, or natural rock formations. This grounds the gameplay in a cohesive setting and ensures the map feels like a complete world rather than a simple test room.

<div style="display: flex; gap: 5px;">
  <div style="flex: 1;">
    <img src="/mapping/insomniano.jpg" alt="Barren kz_insomnia" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>1. Barren kz_insomnia</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/insomniayes.jpg" alt="Detailed kz_insomnia" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>2. Detailed kz_insomnia</em></p>
  </div>
</div>


## Meshes

In Source 2, the world and its objects are mesh based. This differs from Source 1's brush system whereby the world is built with "blocks". In simple terms this means that a map should be designed as a single continous hollow object rather than a space enclosed by a series of solid objects. The new mesh based system offers a far more intuitive approach to building your map however will require some background research if you're coming from Source 1.

It is highly recommended that you move towards this new system if you haven't already since many optimization issues previously manageable within Source 1 will not work the same way and can lead to later visual issues under Source 2's mesh based system.

Maintaining a clean workflow saves you from a lot of troubleshooting later.

> [!WARNING]
> - When working with a mesh work you may encounter red edges. This means you have "bad" faces. Right click a nearby face and ``Remove Bad Faces`` to resolve.

<div style="text-align: center;">
  <img src="/mapping/badfaces.png" alt="Bad faces" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>3. Bad faces caused by improper mesh work.</em></p>
</div>


### Learn more:

[Source 2 101 - Hammer Crash Course #1 : Good workflow habits](https://www.youtube.com/watch?v=pdSDojRatHw), by Eagle One Development Team

[Counter-Strike 2 Hammer - Wall niches / doors / windows / tunnels](https://www.youtube.com/watch?v=Bo1LwsCqp_M), by ReDMooNTV


## Lighting

Lighting helps to build an atmospheric and immersive world, it also plays a major role in the readability of your map. While the context changes from map to map, generally speaking this means that your lighting should strike a balance between being visually appealing and readable for gameplay. 

[`light_environment`](https://developer.valvesoftware.com/wiki/Light_environment_(Source_2)) for sunlight will in most cases provide adequate lighting, however it's worth trying different angles, brightness and color for the light to see what looks the best.

In shaded areas of your map, it may be necessary to incorporate a secondary light source to provide better visibility, however in doing so, it is recommended that the light is complimented by a source such as a candle or light bulb prop. The [`light_omni2`](https://developer.valvesoftware.com/wiki/Light_omni2) entity is standard for generic light sources. For more intricate light shapes you can use a [`light_barn`](https://developer.valvesoftware.com/wiki/Light_barn) or [``light_rect``](https://developer.valvesoftware.com/wiki/Light_rect) entity. To create dynamic lighting effects, within the object properties of the light entity, set the direct lighting type to 'dynamic' and set a 'style'.

<div style="display: flex; gap: 5px;">
  <div style="flex: 1;">
    <img src="/mapping/badlight.jpg" alt="Bad lighting" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>4. Bad lighting</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/goodlight.jpg" alt="Good lighting" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>5. Good lighting</em></p>
  </div>
</div>

Adjusting the luminosity/brightness/fade of your lights will help to make your lights more convincing. Only use light ranges higher than 1024 units sparingly as this can negatively impact fps and compile times.

When testing your lights, changing your 3d view port to **GPU Reference Path Tracing** will provide a real-time raytraced preview of the lighting and reflections of your map in Hammer. This will allow you to adjust your lights without compiling your map. With that said, **3d All Lighting** tends to present shadows more accurately.

<div style="text-align: center;">
  <img src="/mapping/gpupathtracing.png" alt="GPUPathTracing" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>6. Enabling GPU Path Tracing in the viewport</em></p>
</div>

> [!WARNING]
> - Light and shadows may occasionally bleed through both merged and unmerged edges. This is a bug which often occurs for faces with sharp angles (less than 45 degrees), although it can also occur without an apparent cause.

<div style="text-align: center;">
  <img src="/mapping/lightbleed.png" alt="Light bleed" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>7. Light bleed caused by unknown factor</em></p>
</div>


### Lightmap Resolution and Lightmap Space
The lightmap resolution of your map can have a significant impact on the outcome of your map’s lighting. Best practice is to always do a **final compile** for your map which by default is set to 2048 resolution. Below this resolution you are more likely to encounter lighting artifacts, especially in darker areas of the map. In larger maps with more light space it may be necessary to compile your map at a lightmap resolution higher than 2048.

<div style="text-align: center;">
  <img src="/mapping/lightartifacting.jpg" alt="Artifacting" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>8. Lighting artifacts due to low lightmap resolution</em></p>
</div>

With this in mind you also want to avoid calculating lighting for areas of the map never visible to the player. The first step in achieving this is to cull lightmap space from your map by deleting unnecessary faces. Any face that will never be visible to the player should be deleted (assuming it is not contributing to vis). The second step is to incorporate a mesh with the ``toolslightmapres`` material. This is a [tool material](https://developer.valvesoftware.com/wiki/Tool_textures_(Source_2)) which tells the engine where to calculate high resolution lightmap space and will tell the engine where lightmap space should be prioritised.

> [!WARNING]
>
> - Unexpected edges or lines on a surface, discolored textures and shadows without visible sources may indicate that a higher lightmap resolution is required.

<div style="text-align: center;">
  <img src="/mapping/lines.png" alt="VisibleEdges" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>9. Edge on a surface clearly visible</em></p>
</div>

#### Learn more:

[Counter-Strike 2 Hammer - Basic Map Optimisations (compile time)](https://youtu.be/VGxPXnGJ0wM?si=XKQLfUU9U4Ijs_fJ&t=135), by ReDMooNTV

### Light probes and cubemaps
Light probes and cubemaps are required for your map and can be incorporated simultaneously with the [`env_combined_light_probe_volume`](https://developer.valvesoftware.com/wiki/Env_combined_light_probe_volume) *(ECLPV)* entity. Light probes are required to create diffuse lighting on entities which cannot utilize direct lighting such as [``prop_dynamic``](https://www.source2.wiki/Entities/prop_dynamic?_highlight=prop_dynamic&game=any) entities. Cubemaps are required to create proper reflections for material surfaces and your view model. This is achieved by projecting a three dimensional image of a room onto the surfaces within the bounds of the entity.

<div style="display: flex; gap: 5px;">
  <div style="flex: 1;">
    <img src="/mapping/noprobe.jpg" alt="Present light probe" style="width: 80%; display: block; margin: 0 auto;">
    <p style="text-align: center; margin: 10px 0;"><em>10. ECLPV absent</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/almostprobe.jpg" alt="Absent light probe" style="width: 80%; display: block; margin: 0 auto;">
    <p style="text-align: center; margin: 10px 0;"><em>11. ECLPV present, but improper edge fade</em></p>
  </div> 
  <div style="flex: 1;">
    <img src="/mapping/yesprobe.jpg" alt="Absent light probe" style="width: 80%; display: block; margin: 0 auto;">
    <p style="text-align: center; margin: 10px 0;"><em>12. ECLPV present</em></p>
  </div>
</div>

To implement lightprobes and cubemaps you should aim to place an [`env_combined_light_probe_volume`](https://developer.valvesoftware.com/wiki/Env_combined_light_probe_volume) in every room of your map. The origins of these entities should be positioned in the center of each room at player head height. You may need to adjust the position of the origin using the pivot manipulation tool (Insert key). For example if the room has multiple elevations, raising the entity origin to a height between the floor and the ceiling may create more accurate reflections. If an object is obstructing the ECLPV, ensure that the origin is not placed within or halfway through that object. After determining the location for the origin of the entity, the bounds should be extruded to encapsulate the entirety of the room. Recompile and you should now see reflections on your weapon models and the surfaces of your map.


In some instances a seam will appear between two ECLPVs due to a difference between the lighting of each room. To soften the transition between the ECLPVs, within the object properties assign an edge fade distance of 8 or 16 units (image 13). When applying edge fade, ensure the ECLPV edges overlap by twice the distance of your edge fade distance to maintain a smooth blend (image 15).  

<div style="text-align: center;">
  <img src="/mapping/fadeprio.png" alt="FadeAndPriority" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>13. Combined light probe with fade and priority</em></p>
</div> 

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/nofade.gif" alt="Fade" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>14. ECLPV without fade or overlap</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/yesfade.gif" alt="No fade" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>15. ECLPV with fade and overlap</em></p>
  </div> 
</div>

When placing ECLPVs near walls, floors, or ceilings, extend the boundaries so the edge fade overlaps these surfaces. If the fade ends exactly at the wall, the lighting influence drops to zero, and the surface won't receive proper reflections or bounce light (image 11).

<div style="text-align: center;">
  <img src="/mapping/lightprobe.png" alt="Artifacting" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>16. ECLPVs encapsulating the rooms with edge fade and overlap</em></p>
</div>

Irregularly shaped rooms often force ECLPVs to overlap awkwardly through walls into adjacent spaces. This will occasionally cause surfaces to sample the wrong ECLPVs. To fix this use the priority system to "force" the correct ECLPV to take precedent (image 13). Usually, you’ll want the ECLPV that best fits the specific room's shape or lighting to have the higher priority. 


<div style="text-align: center;">
  <img src="/mapping/probepuzzle.png" alt="Probepuzzle" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>17. A combined light probe "puzzle" with priorities mentioned</em></p>
</div>


> [!NOTE]
> - When two or more env_combined_light_probe_volumes are set to the same priority, the engine will determine the priority based on the hierachy of the entity id.
>
> - Having multiple env_combined_light_probe_volume entities with custom “cubemap texture” can be buggy. Try changing the priority settings.
>
> - If a certain object is causing problematic reflections, the option "Render to Cubemaps" can be disabled in the objects properties.

> [!WARNING]
>- env_combined_light_probe_volume can sometimes break. Try recompiling the map or replacing combined light probes until it works again.
>
>- Do not rotate env_combined_light_probe_volumes (TEST!!!!!)

<div style="text-align: center;">
  <img src="/mapping/buglightprobe.png" alt="BuggedLightprobe" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>18. Broken env_combined_light_probe_volume</em></p>
</div>


> [!DANGER]
> - It has been [suggested](https://developer.valvesoftware.com/wiki/Counter-Strike_2_Workshop_Tools/Level_Design/Maps_Workshop/Post_Import_Fixup_steps#Cubemaps/Lightprobes) that edge fade may negatively impact performance, while we were not able to find clear evidence of a performance loss. Further testing could be conducted.

*Open in a new window to enlarge:*
<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/lightprobesetup.png" alt="Edgefadesetup" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>19. ECLPV edge fade setup</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/nofade.png" alt="No fade" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>20. ECLPV without fade or overlap</em></p>
  </div> 
    <div style="flex: 1;">
    <img src="/mapping/8fade.png" alt="8 fade" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>21. ECLPV with 8u edge fade and 16u overlap</em></p>
  </div> 
    <div style="flex: 1;">
    <img src="/mapping/32fade.png" alt="32 fade" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>22. ECLPV with 32u edge fade and 64u overlap</em></p>
  </div> 
</div>

## VIS

The primary function of VIS (visibility) is to determine what is visible to the player from any given position. This is calculated during the map's compilation phase and, along with lighting, is one of the most resource intensive parts of the process. Poor optimization can cause compile times to skyrocket. VIS enables the engine to prevent rendering areas not visible to the player, ultimately improving FPS for the end user. It is therefore imperative that any surface which blocks a substantial proportion of your map from vision is being calculated for VIS.

In Source 1, visibility was managed by converting geometry into [`func_detail`](https://developer.valvesoftware.com/wiki/Func_detail). Source 2 follows a similar logic, but the workflow depends on the asset type. While props are non-VIS contributors by default, mesh objects must be manually configured. To prevent a mesh from affecting VIS, you must enable the `Not a Vis Contributor` setting within the object properties.

<div style="text-align: center;">
  <img src="/mapping/nonvis.png" alt="nonvis" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>23. Object properties</em></p>
</div> 

VIS functions most efficiently with simple "boxes" and straight surfaces. Adding more complex geometry inside a room will therefore hinder this process. Detailed elements should be separate objects set as non-VIS contributors (image 23).

In technical terms, VIS operates using cubes called voxels. These voxels fill the playable space, "communicating" with one another to determine line-of-sight and visibility.

If these voxels get to the [void](https://developer.valvesoftware.com/wiki/Void) (the empty space outside your map's sealed geometry), it will cause a VIS Leak. When a leak occurs it often results in objects rendering in and out of view. Ensure your outer "shell" is perfectly sealed and voxel sizes are kept to a minimum to keep the VIS contained. Any VIS contributor face that points outside of the map is a VIS leak. VIS can also affect shadows and lightning on your player model.

<div style="text-align: center;">
  <img src="/mapping/visleak.gif" alt="visleak" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>24. VIS leak</em></p>
</div>


VIS bugs are similar to VIS leaks but on a much smaller scale. For example when a voxel covers two adjacent rooms causing geometry to render between them.

The entity [`visibility_hint`](https://developer.valvesoftware.com/wiki/Visibility_hint) allows you to manually control the size of these voxels in specific areas. While using larger voxels can significantly reduce your compile times, you must be careful, if they are too large, they may fail to properly respect your map's boundaries and bleed into other rooms or the void, resulting in a VIS leak. Larger, open maps such as infinite water maps can use higher voxel sizes.

To visualize how the engine is "thinking," you can view these voxels directly in Hammer. Navigate to the _Map_ dropdown menu and select `Load Compiled Vis Data`. This will overlay the voxels clusters onto your 3D view, allowing you to identify areas where the density might be too high or where voxels might be leaking.

To visualize which objects in your map are currently affecting visibility, click the ``Visibility contributors view`` button located in the toolbar (see image below).

<div style="text-align: center;">
  <img src="/mapping/viewviscontribs.png" alt="viscontribs" style="max-width: 60px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>25. "Visibility contributors view" button</em></p>
</div> 

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/kuutiovis.jpg" alt="8x MSAA" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>26. kz_kuutio</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/kuutionovis.jpg" alt="CMAA2" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>27. kz_kuutio with only VIS contributors</em></p>
  </div> 
</div>

> [!NOTE]
>- Given you have the core geometry of your map finished, you only need to calculate VIS once to compile your map. This allows you to reduce compile times substantially when testing non-VIS related elements. However, making any change to the core geometry of your map will cause your map to leak. To resolve these leaks you should recompile VIS. 

> 
> [!WARNING]
> - The ``toolsnodraw`` material should not be used to 'seal' your map like you would in Source 1. This will cause a VIS leak.
> - Whilst the ``toolsskybox`` can still be used to seal the sky of your map, this material no longer occludes objects outside the world mesh. If required you will need to use create and employ a new material with the ``Csgo Moondome`` shader using the same skybox texture as your ``env_sky`` entity.

### Learn more:

[Counter-Strike 2 Hammer - Basic Map Optimisations (compile time)](https://www.youtube.com/watch?v=VGxPXnGJ0wM), by ReDMooNTV

[CS2 Mapping Academy #10 - VIS Optimization (Counter Strike 2)](https://www.youtube.com/watch?v=XLT2b0Ej8DM), by Eagle One Development Team

[Visibility](https://developer.valvesoftware.com/wiki/Source_2/Docs/Level_Design/Visibility), by Valve Developer Community

## Texturing

Textures can turn raw geometry into a living breathing world. Fortunately making your own textures is easier than ever with Source 2 offering far more intuitive and complex texture manipulation. This provides you with an opportunity to develop a unique style which will make your map stand out from others.

While there are no standards for the aesthetic of your map, there is an expectation that your textures should not impact visibility and maintain a degree of cohesion. Try to keep a consistent resolution for each texture where possible, align patterned materials with adjacent patterned materials, and ensure surfaces adopt their expected properties (walking on grass should sound like grass).  

>[!NOTE]
> - Valve assets can't be edited without decompiling them first.

### Custom Texturing and Materials
Custom textures and materials can be added to your addon using the material editor. To add a new texture/material you will need to create a new ``.vmat`` file. To create a ``.vmat`` file simply open the material editor, press new and save the file within the ``CONTENT`` path like:
``Counter-Strike Global Offensive\CONTENT\csgo_addons\YOUR_ADDON\materials``.

You must save the file before you can edit it!

The list of properties to choose from will vary depending on the shader type you choose. If you wish to change the shader you can do so and re-save that vmat without having to create a new one.

Opening the variables tab allows you to change the interactive properties of the material including the sound of footsteps and bullet impacts. Select material type and search through the list of available surfaces until you find an appropriate choice.

> [!NOTE]
> - Most material properties update in real-time. This means you can adjust your material in one window while viewing the result in game from another window.

> [!WARNING]
>* Texture resolutions must be a power of two (e.g., ``1024x2048``, ``1024x128`` or ``2048x2048``). Supported file formats include ``JPG``, ``PNG``, ``TGA``, and ``PSD``.
>
>* Texture resolutions should be capped at ``2048x2048`` to optimize file size.

Missing materials now cause users to crash on secure servers. A recent 'safeguard' change from Valve. This usually occurs when you assign a material to a face, then delete that material from your addon folder or don't place it inside  
``Counter-Strike Global Offensive\content\csgo_addons\YOUR_ADDON\materials``. 

This will not crash your client when running a listen server in insecure mode making it easy to miss until your map is tested on a dedicated server. 

<div style="text-align: center;">
  <img src="/mapping/materialerror.png" alt="Material error" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>28. Crashed game caused by missing material</em></p>
</div>

#### Learn more:

[PBR Explained in 3 Minutes - Physically Based Rendering](https://www.youtube.com/watch?v=_ZbkOZNgwNk), by GarageFarm Academy

[Counter-Strike 2 Hammer: Custom Textures / Materials (PNG images)](https://www.youtube.com/watch?v=1T-a3qfN_2c), by ReDMooNTV

### Useful shaders
Material shaders are different customizable configurations for materials each with varying properties and functions. Here we have listed some of the more useful ones with tips on how to use them.


#### `Csgo Environment` 

This shader allows **PBR** layering for generic materials such as wall, floor and terrain surfaces.

Although only a color/texture file is required for the shader to function, you should aim to generate **normal** and **roughness** maps at a minimum to provide your materials with realistic topography and surface reflectivity.

If you’re planning to use a material texture which lacks other PBR layers, you can generate them yourself. For those who want fast results you can quickly generate these layers from a color/diffuse texture using [NormalMap Online](https://cpetry.github.io/NormalMap-Online/) or [Materialize](https://github.com/maikramer/Materialize).

You can also generate the layers manually using an appropriate photo editing software such as Gimp, Photoshop or Blender.

#### `Csgo Environment Blend` 

The `Csgo Environment Blend` shader allows you to combine two materials and create smooth transitions between those materials with the `Blend Painting Tool` (Shift+V). You can also add a wetness layer if you wish to create a blend between a wet and dry surface. To use blend materials, assign the custom blend material to a face, select that face and then change to the `Blend Painting Tool`. Within the tool settings, change "Paint On" to selected faces, then on the selected face you can click to paint. If you wish to switch to the alternate material, hold ctrl while painting.

> [!NOTE]
> - Increasing the *subdivision* on a face will allow finer strokes with the paint tool but may force uneven results for surfaces with complex geometry. As an alternative method, you can manually cut edges on the face to the shapes you desire and with the paint tool `Flood Fill`.

#### `Csgo Water Fancy` 

If you don’t plan on adding water to your map you can ignore this shader.
If you do, it is imperative that you create a custom water material rather than using the stock assets.

The easiest way to prepare a water material using this shader is to decompile a water material already available in the game. This will allow you to see how the shader properly functions.

Most people’s first issue when using stock water is that the surface starts to fade the further it is located from the world origin. To adjust the fade distance, change the ``Map UV Max`` and ``Map UV Min``.


#### `Csgo Complex` 

The ``Csgo Complex`` shader offers experimental properties for your materials such as emissive lighting, transparency, animation and movement.

To create Neon/Glowing/Illuminated materials with the “Csgo Complex” shader tick the “Self Illum” box. Scroll down and set the “Self Illum Mask” to white. Play around with the “Brightness” and “Albedo Factor” slider.

With glowing materials it's important to remember that it will cause light artifacting VERY easily if the light is mainly coming from Self Illum materials. Thats why it's recommended to disable "Emissive Lighting" under the mesh properties. Emissive in this case means that it reflects light from itself onto other things (it's bad)

To make the glowing material appear as “glowing” (without as many problems) a combination of postprocessing (with bloom) and the use of light entities is recommended. Good light entities for this case could be “light_rect” and “light_omni2” with either a sphere or one of the tubes as a light shape. Remember that less light entities are better than many.

> [!WARNING]
>- Emissive materials can cause light artifacts. Using emissive materials as your primary light source often results in "noisy" or splotchy light artifacts, especially in dark environments. Disable ``Emissive lighting`` and instead use postprocessing bloom and light entities.

<div style="text-align: center;">
  <img src="/mapping/emissivefail.png" alt="Emissive fail" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>29. Light artifacts caused by an emissive material being the main light source</em></p>
</div>

Transparent materials can also be made with the Csgo Complex shader. Just tick the “Translucent” box and configure it. For this you will need an alpha mask.

#### `Csgo Static Overlay` 

Can be used to project materials onto faces. The best use case for this would be images/art/lj numbers. This shader does also have the translucent option. 

Why does this differ from just making a face with Csgo Complex? Well because faces tend to glitch out when viewed from further away, this doesn’t happen with overlays, as seen in the gif below.

<div style="text-align: center;">
  <img src="/mapping/overlayface.gif" alt="OverlayVsFace" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>30. Overlay and face comparison</em></p>
</div>

#### `Sky` 

Used for making custom skybox material. The “Sky Texture” can be added in multiple different forms. The preferred and best looking one is as an .exr file with HDR. This will however use the most file size.

The Dxt1 (LDR) option can be used if the skybox image isn't HDR. This option uses less file size. Use this option if your skybox is a simple .png image.

If your skybox has six faces (back, down, front, left, right, up), you need to convert it to a Cube Map format as seen in the image below. They can be puzzled together in image editors. 

<div style="text-align: center;">
  <img src="/mapping/skybox.png" alt="skycubemap" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>31. CS:GO skybox faces turned into a CS2 compatible skybox Cube Map texture</em></p>
</div>

#### `Csgo Moondome` 

Moondome is used because ``toolsskybox`` doesn’t work properly and renders things behind it. Moondomes are basically a material shader that acts like a proper skybox material. Keep in mind that it has a hitbox by default but this can be fixed by changing the Surface Property to ``Default Silent`` in the Attributes tab. This makes the moondome act like a clip by not having a hitbox but still acting like a wall that can’t be passed.
"Cube Map texture" is the same texture as used for ``Sky``.

> [!WARNING]
> * When making moondomes it’s important to keep in mind that the Color setting is set to gray by default and should be changed to white to not have the moondome darker than the skybox.

#### `Refract` 

It's broken as this is being written. Has to be rendered as a model through a ``info_particle_system`` entity. 

Needs ``FidelityFX Super Resolution`` video setting ``disabled`` to show without visual bugs.

#### `Csgo Weapon` 

Can be used to make very interesting materials by enabling the SFX options ``Glitter`` and ``Iridescence``. This shader does in fact work on other surfaces than weapons.

#### `Csgo Simple 3layer Parallax` 

Can be used to make fake rooms and layered materials such as ice. Check out [this](https://www.youtube.com/watch?v=6ZgSIaJoe8g) video to learn more. 

#### `Csgo Composite Generic` 

Used for loading screen images. The option A is the only one needed.

#### `Csgo Lightmappedgeneric` 

Coming from Source 1 you may have used the ``LightmappedGeneric`` shader for your generic materials. While this shader is still available in Source 2, it should only be used sparingly as it lacks many of the features and fidelity offered by alternative shaders.

## Particles

Particle effects such as fire, water ripples and dust motes can be added to your map with an ``info_particle_system`` entity. While some stock particle systems are available, many will require tweaking within the particle editor to function. 

By default the particle editor is soft locked for fresh installations of Hammer. To enable the particle editor follow [this](https://developer.valvesoftware.com/wiki/Counter-Strike_2_Workshop_Tools/Particles) tutorial. 

If you're interested in learning more about particle systems, we recommend decompiling a Valve particle system or custom asset and exploring its properties within the particle editor.


>[!Warning]
>- Adding an excessive number of particle systems or systems with high emission rates can significantly impact performance.
>
>- Use ``Render omni2 lights`` sparingly.

## Sounds

Good luck!

#### Learn more:

[Counter Strike 2 Audio Academy](https://www.youtube.com/watch?v=6BqNhaPDi48&list=PLHSLq5FjjRw2zPKya7QVp62XPvQUu9k-O), by Eagle One Development Team

[Custom Sounds on Hammer, Counter Strike 2, Source 2 full guide, looping sounds tutorial, area based.](https://youtu.be/xcILOV_eFCE?si=Rd26D8O4Gb3CaEyP), by Brian Vuksanovich

[Encoding.txt](https://www.source2.wiki/CommunityGuides/encodingtxt?game=any)

## Gameplay
 Core KZ gameplay elements such as bunnyhop and teleport triggers are now easily implemented using [CS2KZ Mapping API](https://github.com/KZGlobalTeam/cs2kz-metamod/wiki/Mapping-API). To test your map with the CS2KZ plugin and Mapping API features, vist zer0.k's [cs2kz mapping](https://github.com/zer0k-z/cs2kz-mapping).

 Ensure that your map follows the global map standards if you wish to have your map approved for the global leaderboards.

 > [!WARNING]
 > - Physics boundaries for triggers are not determined by the shape of their mesh by default. Instead physical boundaries for triggers are defined by their total width and length (object boundary). This makes any trigger with a complex shape redundant. To resolve, select the trigger in mesh mode, then within the mesh properties change physics type to ``mesh``.

<div style="text-align: center;">
  <img src="/mapping/triggermesh.png" alt="TriggerMesh" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>32. L shaped trigger with different physics types</em></p>
</div>

## Nice to haves

### 1. Team Selection
Adding a ``team_select`` entity to your map will add team selection scene to your map. This is an opportunity for you to display the most cinematic perspective of your map when players first load in. You can place the entity at any location and rotate the entity to get the best angle.

<div style="text-align: center;">
  <img src="/mapping/teamselectscreen.jpg" alt="Team Select Screen" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>33. kz_madhatter team select screen</em></p>
</div>

### 2. Custom loading screens

Custom loading screens, map icons and description can be added to your maps as a final touch with a hint of professionalism. You might like to add some nice screenshots of your map, credits for contributors and an icon representing yourself as the author.

>[!WARNING]
>While you can have a maximum of 10 loading screen images, this will increase the size of your map file.

<div style="text-align: center;">
  <img src="/mapping/loadingscreen.png" alt="Loading screen" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>34. Custom loading screen</em></p>
</div>

#### Learn more:

[CS2 Loading Screen Creator](https://github.com/jakkekz/cs2-loading-screen-stuff), by jakke

[Change Loading Map Screens in Counter Strike 2, Hammer Mapping tutorial, Source 2 guide.](https://www.youtube.com/watch?v=P9oxDXHoV9o), by Brian Vuksanovich

### 3. Gradient Start & End zones

Start and end zones should be clearly visible to the player. A self-illuminated gradient texture is an effective way to indicate these zones and other triggers the player may interact with. 

  <div style="flex: 1;">
    <img src="/mapping/startandend.png" alt="backfacefixed.png" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>35. Start and End zone</em></p>
  </div> 


1. Download the "Gradient" image below and place it inside:

 ``Counter-Strike Global Offensive\content\csgo_addons\YOUR_ADDON\materials``

<div style="text-align: center;">
  <img src="/mapping/gradient.png" alt="Gradient" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>36. Gradient</em></p>
</div>

2. Create a ``Csgo_Complex`` shader material with ``Translucent`` and `Render Backfaces` enabled.

3. Add ``gradient.png`` as the translucent layer.

4. Enable ``Self Illum`` if you want it glowing.

5. Create the object.

6. The material looks best when the shapes top and bottom faces are removed. The face's top edge can be cut off because it renders a line.

7. Disable collision and VIS contribution in the object properties.

> [!note]
> - Rather than tinting/coloring the material in the material editor, you can adjust the color of the object in the object properties.

### 4. Custom postprocessing

You can adjust you visual athmosphere further on your map, with postprocessing. 

To do this, open the `Postprocessing Editor` and create a new ``.vpost`` file. Save it to ``CONTENT\csgo_addons\YOUR_ADDON\postprocess``. Once saved you can add different postprocessing layers to the file. Create a new mesh in your map and tie it to a ``post_processing_volume`` entity. Then in the object properties set `Postprocessing file (.vpost)` to the .vpost file just added.
 Once compiled your map will inherit the postprocessing layers from the .vpost file.

>[!NOTE]
> You can have postprocessing limited to the volume of the mesh or encompassing the entire map by enabling `Master Volume`.
>
> By adjusting the postprocessing layers in the Postprocessing Editor, you can view the changes in real-time.
>
> Check out these https://codeberg.org/GameChaos/s2-open-domain-lut-generator/tags


## Miscellaneous issues/bugs

### 1. Backface shadows

Following the Animgraph 2 update, certain faces now draw false or incomplete shadows. This may occur when a surface is removed for optimization purposes or a shadow is casted from one face behind another. While the ``toolsblocklight`` material is intended to resolve this issue, it does not work in all cases since the sharpness and opacity of this material scales with lightmap resolution.

<div style="text-align: center;">
  <img src="/mapping/blocklight.png" alt="TriggerMesh" style="max-width: 550px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>37. Blocklight shadow fades as the lightmap gets more populated</em></p>
</div>

If you have removed a face from an object to save lightmap space, and that object is drawing incomplete shadows, replace the face. Then select the replaced face and reduce the `Lightmap Resolution Bias` to ``-4``.

<div style="text-align: center;">
  <img src="/mapping/bias.png" alt="lightmapbias" style="max-width: 550px; display: block; margin: 0 auto">
  <p style="margin: 10px 0;"><em>38. Lightmap Resolution Bias</em></p>
</div>

In situations where a shadow shouldn't be visible. First attempt disabling shadow casting for the problematic object. If the face casting incorrect shadows is a VIS-contributor you will need to make a "dummy face". First retexture the surface of the problematic face with the toolsnodrawmaterial. Then create the new dummy face by copying the original face and using paste special (Ctrl+Shift+V). For the new dummy face, within object properties enable "Not a vis contributor", disable shadow casting, and retexture the material to match the original surface. Be careful to ensure you do not disable VIS contribution for the world mesh. 

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/badshadows.png" alt="badshadows" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>39. Broken backface shadows</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/badshadow2.png" alt="badshadows2" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>40. Broken backface shadows</em></p>
  </div> 
</div>

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/backfacenotfixed.png" alt="backfacenotfixed.png" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>41. Broken shadows</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/backfacefixed.jpg" alt="backfacefixed.png" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>42. Fixed shadows (added non-VIS faces with -4 lightmap bias)</em></p>
  </div> 
</div>

### 2. Slide triggers need to be wider and taller, especially on smaller blocks to ensure proper contact.
Due to latency, slide trigger meshes should be larger than the associated blocks intended to be slided on. This prevents the 'slide' effect from registering late and nerfing the speed of the player. Simply extend the width of your slide triggers to overhang the blocks and raise the height of the trigger as much as possible relative to the confines of other gameplay elements.

### 3. Func_brush tends to act weirdly.

Do not use. Ported maps may have these.

### 4. Having multiple .vpk files packed

Compiling a renamed map creates a new .vpk. To prevent the game from defaulting to a previously compiled version based on alphabetical priority, remove all redundant .vpk files from the ``/GAME`` directory.

### 5. Missing assets


Ways of finding or fixing missing assets:

- *Map* -> *Check Map For Problems*.
- The console command ``mat_print_error_materials``.
- [Fixing FATAL ERROR: materials/error.vmat](https://www.youtube.com/watch?v=Ktm0aInjGtk), by sarim
- Remove things until it works.

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/missingmaterial.png" alt="backfacenotfixed.png" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>43. Missing texture</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/postprocessingbug.gif" alt="Broken post_processing_volume" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>44. Broken post_processing_volume due to a missing .vpost file</em></p>
  </div> 
</div>

>[!note]
>- Missing materials can be difficult to find when used in models.


### 6. Custom fonts won't be packed into the workshop map.

For example custom fonts used with ``point_worldtext``. No fix available for now.

### 7. 3D Skyboxes need to be recompiled to update in the main map.

### 8. When following online source 2 tutorials, be aware that some methods or entities may not work in the CS2 version of Hammer.

For example, `volumetric_fog` is unavailable in CS2 but available in Half-Life: Alyx.

## Tips and tricks

### 1. Enable ``Tabbed Mode`` in "Window" to easily swap between ``.vmap`` files.

<div style="text-align: center;">
  <img src="/mapping/tabbedmode.png" alt="Tabbed Mode" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>45. Tabbed mode</em></p>
</div>

### 2. Use instances

Instances are ideal for repetitive elements or objects that are copy-pasted throughout the map. Using them keeps your project organized and allows you to make global changes to all copies simultaneously by editing a single object.

To create an instance, select your objects, right-click, and choose ``Selected Objects`` and ``Create Instance`` or use the shortcut ``Ctrl+Shift+G``.

Instances have to be edited inside the instance editor by double clicking the instance object.

<div style="text-align: center;">
  <img src="/mapping/instaces.gif" alt="Instances" style="max-width: 400px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>46. Ladder instance</em></p>
</div>

 ### 3. Group objects

Allows you to select multiple objects at once. Select objects and press `Ctrl+G`. To ungroup do `Ctrl+U`.

### 4. Remove unused compiled assets

Before publishing a workshop version remove the **compiled** ``/materials`` and maybe ``/models`` folder.

Then re-open Hammer and reload the map.

This causes Hammer to only compile used assets, otherwise it would pack everything ever compiled to the workshop version (even assets not used anymore).

>[!NOTE]
>- Assets are compiled when viewed in Hammer.

>[!DANGER]
>* COMPILED FILES ARE FOUND IN THE ``/GAME`` PATH AND **NOT** THE ``/CONTENT`` PATH.
>
>   FOR EXAMPLE: ``Counter-Strike Global Offensive\GAME\csgo_addons\YOUR_ADDON``
>
>* **IT IS RECOMMENDED BACKING UP YOUR ADDONS ``/CONTENT`` FOLDER BEFORE TRYING THIS.**

### 5. Decompiling maps

Especially on larger maps, scroll through the assets in the material browser before opening the ``.vmap`` to prevent very frequent crashes.

## Infinite water
The infinite water setup has changed significantly since CS:GO, largely due to how it interacts with ``env_combined_light_probe_volumes``. To get it looking right, keep these points in mind:

- Larger Water Surface: The water area needs to be much larger than in CS:GO. This hides bad reflections and gives the edge fade distance to blend out _smoothly_.

- Light Probe Coverage: Depending on your layout, a single large light probe is usually best. Never let light probe edges sit on top of the water, as the seams are incredibly obvious on reflective surfaces such as water.

- Always center your water origin on the grid. Water will stop rendering entirely once it reaches 20,000 units from the origin on any side.

- 3D Skybox Transitions: Since the main map renders over the 3D skybox, ensure your main map geometry does not sit within the water's fade range. This prevents the "seam" between the real world and the skybox from becoming visible.

- If your map has a low perspective and players cannot look directly down onto the water, you can get by with only water fade.

- If the reflections from your env_combined_light_probe_volume look messy, identify the specific objects causing the issue. You can disable "Render to Cubemaps" on those individual entities to prevent them from being captured in the reflection, which often cleans up the final look.

### Diving deeper

If your map is tall (for example kz_avalon) the edge between the main map and 3d skybox is going to be noticeable, mostly due to ``env_combined_light_probe_volumes``.

Workarounds for this includes:
- Replacing the env_combined_light_probe_volume “cubemap texture” with the one from the 3d skybox. 
  - In the 3d skybox map right click your env_combined_light_probe_volume entity and “Write Custom Cubemap…”, then select this ``.vtex`` file in the main map.
If this is done, remember to set this env_combined_light_probe_volume’s priority lower than other, otherwise other env_combined_light_probe_volumes on the map will bug out.

- ``env_combined_light_probe_volume`` configuration
  - The sphere should be roughly on the same height and placement in both of the maps (3d skybox and main). You can move the sphere with the “Pivot Manipulation tool”
  - The env_combined_light_probe_volume should be larger than the playable area (image 48)
- Water Configuration
  - Water can only be configured on new/decompiled water materials.
  - SSR
    - Right now SSR might be the best solution for reflections on these maps.
    - Downsides include:
       - Reflects what the user sees (no undersides or backsides for example)
      - Things moving off the camera will flicker and get distorted
    - SSR has a lot of configurable values in the material editor after being enabled.
  - Water Fade
    - The idea of water fade is to help with the transition between the main map’s water and the 3d skybox’ water.
    - These sliders configure the waters fade: 

<div style="text-align: center;">
  <img src="/mapping/waterfade.png" alt="WaterFade" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>47. Water fade sliders</em></p>
</div>

<div style="text-align: center;">
  <img src="/mapping/avalon.png" alt="Avalon" style="max-width: 600px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>48. kz_avalon setup (if toolsskybox worked as intended the skybox would probably have to cover whole main map's water)</em></p>
</div>

  - Other settings such as reflectance and glossiness can also help with the transition but it makes the water *uglier*.

  - Fog can help cover the fade but adds a radius of fog which is quite noticeable at higher elevations.

<div style="display: flex; gap: 5px;">
  <div style="flex: 1;">
  <img src="/mapping/wordwater.png" alt="wordwater" style="max-width: 350px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>49. word's infinite water tutorial, <a href="https://discord.com/channels/452163833973440522/1171813934832046173/1409374472594526319">discord link</a></em></p>
  </div>
  <div style="flex: 1;">
  <img src="/mapping/jakkewater.png" alt="jakkewater" style="max-width: 350px; display: block; margin: 0 auto;">
  <p style="margin: 10px 0;"><em>50. jakke's infinite water template, <a href="https://discord.com/channels/452163833973440522/1171813934832046173/1470094992453402726">discord link</a></em></p>
  </div>
</div>

> [!WARNING]
>* ``MSAA multisampling`` options render a line at the horizon. ``CMAA2`` and ``None`` work fine.

<div style="display: flex; gap: 15px;">
  <div style="flex: 1;">
    <img src="/mapping/8xmsaa.png" alt="8x MSAA" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>51. Infinite water with 8x MSAA setting</em></p>
  </div>
  <div style="flex: 1;">
    <img src="/mapping/cmaa2.png" alt="CMAA2" style="width: 100%; display: block;">
    <p style="text-align: center; margin: 10px 0;"><em>52. Infinite water with CMAA2 setting</em></p>
  </div> 
</div>


## Useful resources

- [CS2KZ Mapping](https://github.com/zer0k-z/cs2kz-mapping): Scripts for setting up and launching Hammer with CS2KZ plugin made by zer0.k
- [CS2KZ Mapping API](https://github.com/KZGlobalTeam/cs2kz-metamod/wiki/Mapping-API): Documentation for CS2KZ mapping api.
- [Source2Viewer](https://source2viewer.com/): Tool for decompiling CSGO and CS2 assets from vpk packages.
- [Valve Developer Community](https://developer.valvesoftware.com/wiki/Source_2/Docs): Official Source Engine wiki.
- [Source2 Wiki](https://www.source2.wiki/CommunityGuides/installS2Sdk?game=cs2): Community wiki for S2 made by Angel, DoctorGurke and others.
- [Text .vmat generator](https://jakkekz.github.io/fuk-point_worldtext/): Tool for generating custom text textures and overlays, made by jakke
- [CS2 Loading Screen Creator](https://github.com/jakkekz/cs2-loading-screen-stuff): Tool for creating custom map loading sreens, made by jakke
- [Eagle One Development Team Youtube Channel](https://www.youtube.com/@eagleonedevelopmentteam849/videos), Various tutorials covering the fundamentals of the Source 2 Hammer editor.
- [Brian Vuksanovich's Youtube Channel](https://www.youtube.com/@brian-vuksanovich/videos): Various tutorials covering more niche features of Source 2.
- [ReDMooNTV's CS2 Hammer series](https://www.youtube.com/watch?v=UJgoj2-8xkk&list=PLwcbHxIkIB3eRNVnDiwUDkKeECB_tbyKA), Various tutorials for Source 2 hammer by ReDMooNTV
- [Easter Lee's](https://github.com/EasterLee/easter_prefabs) underwater overlay and other particles.
- [S2ZE - Map Porting Guide](https://docs.google.com/document/d/1buKzjP-2com9GcXVxCfyRBi6sDiKmzMoVy9RNbYQqIo/edit?tab=t.0)

## Authors

_Thank you for visiting_,

<div style="display: flex; gap: 5px;">
  <div style="flex: 1; text-align: center;">
    <img src="/mapping/jimi.png" alt="jimi" style="max-width: 350px; display: block; margin: 0 auto;">
    <p style="margin: 10px 0;"><em><a href="https://steamcommunity.com/id/Pierre_Bourne/">jakke</a></em></p>
  </div>
  <div style="flex: 1; text-align: center;">
    <img src="/mapping/grom.png" alt="grom" style="max-width: 350px; display: block; margin: 0 auto;">
    <p style="margin: 10px 0;"><em><a href="https://steamcommunity.com/id/leetly">leetly</a></em></p>
  </div>
</div>

  With support from the [CS2KZ mapping commmunity](https://discord.gg/R593VhE).

