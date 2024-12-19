# Modes

Similar to [GOKZ](https://github.com/KZGlobalTeam/gokz) there are two modes you
can choose to play.

## Vanilla

The "Vanilla" (VNL) mode is the standard CS2 experience.

The goal is to preserve as much of the default movement mechanics as possible
while only providing quality of life adjustments.

This means no movement related settings are changed and the gameplay should feel
exactly like standard matchmaking.

## Classic

> [!NOTE]
> The name "Classic" is not final and is still under discussion, but it 
> has gained popularity in the community and may become the official name.

The "Classic" (CKZ) mode is the spiritual successor of SKZ.

The goal is to make KZ more skill-based than RNG-based.

- Bhopping is consistent with good scroll-timing.
- Bhop speed depends on landing speed.

Players found that SKZ felt slow (~270 speed while bhopping), while consistently reaching
380u/s was difficult and annoying on most maps. CKZ addresses this with a **logarithmic speed formula**:

- Higher initial speed gains compared to SKZ.
- Diminishing returns as speed increases, preventing absurd speeds but allowing fast-paced gameplay (~300 pre).
- No hard cap on speed, but building infinite speed isn’t possible.

We also want to keep popular mechanics such as pre-keep and "WAD" / "our father tech"
in the new mode, which are not part of SKZ.

KZT and SKZ were very similar, yet so different. We want to keep a single
heavily modified mode that everyone can enjoy and compete in.

