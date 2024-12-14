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
> The name is still up for discussion but people started using it, so it might
> stick.

The "Classic" (CKZ) mode is the spiritual successor of SKZ.

The goal is to make KZ more skill-based than RNG-based.

- bhopping is consistent if you have good scroll-timing
- bhop speed depends on your landing speed

Many players in CS:GO complained about how "slow" SKZ felt because most of the
time you would not go above ~270 speed while bhopping. On the other hand, 380u/s
can be difficult to control and, if consistent, would become annoying on most
maps. This is why we decided to change the speed formular to give you more speed
than SKZ initially, but with diminishing returns the faster you go. The speed
you get while bhopping now follows a logarithmic curve, which means you get a
lot of speed initially, but the faster you go the less speed you gain. This
makes for fast-paced gameplay with ~300 pre while bhopping, but no absurd speeds
beyond that. It also means there is no hard cap, just like in SKZ, but instead
diminishing returns the faster you go, so you can't build up speed forever.

We also want to keep popular mechanics such as pre-keep and "WAD" / "our father tech"
in the new mode, which are not part of SKZ.

KZT and SKZ were very similar, yet so different. We want to keep a single
heavily modified mode that everyone can enjoy and compete in.
