# This file was auto-generated by rvoxgen.
# -- DO NOT EDIT DIRECTLY --


from enum import Enum


class BaseSound2Ctl:
    name = "Sound2Ctl"
    mtype = "Sound2Ctl"
    mgroup = "Misc"

    class Channels(Enum):
        mono = 0
        stereo = 1

    class Mode(Enum):
        lq = 0
        hq = 1
