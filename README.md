# threejs
 Tutorials practice
# Main.js

This is the main JavaScript file for the project. It contains the code to set up the Three.js scene, create objects, and update the rendering.

## Initialization

The `init` function sets up the Three.js scene, including the fog, objects, camera, and renderer. It returns the scene object.

## Objects

### Box

The `getBox` function creates a box object with the specified width, height, and depth. It uses a blue color material.

### Plane

The `getPlane` function creates a plane object with the specified size. It uses a red color material and is double-sided.

## Update

The `update` function is called recursively to continuously update and render the scene. It rotates the box object and requests the next frame.

## Usage

To use this code, call the `init` function to initialize the scene and render it.

Example:
