# This file was auto-generated by rvoxgen.
# -- DO NOT EDIT DIRECTLY --


from enum import Enum


class BaseDistortion:
    name = "Distortion"
    mtype = "Distortion"
    mgroup = "Effect"

    class Type(Enum):
        lim = 0
        clipping = 0
        sat = 1
        foldback = 1
        foldback2 = 2
        foldback3 = 3
        overflow = 4
