import Roact from '@rbxts/roact';
/* The below would usually be handled by a UI Library written natively in ts */
// Fetch the most appopriate ui parent
const LocalPlayer = game.GetService('Players').LocalPlayer as Player;
let PlayerGui: Instance | undefined;
try { // Attempt to use gethui or CoreGUI
  PlayerGui = gethui ? gethui() : game.GetService('CoreGui');
} catch (error) {}

if (!PlayerGui)
  PlayerGui = LocalPlayer.FindFirstChildOfClass('PlayerGui'); // Default to PlayerGui

// Create an example UI
const tree = <screengui IgnoreGuiInset={true}>
  <textlabel Key='Label' Text='It works!' Size={new UDim2(1, 0, 1, 0)}/>
</screengui>;

// Mount it
Roact.mount(tree, PlayerGui, tostring(math.random()));
