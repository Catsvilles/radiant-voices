# This file was auto-generated by rvoxgen.
# -- DO NOT EDIT DIRECTLY --


from enum import Enum


class BaseSampler:
    name = "Sampler"
    mtype = "Sampler"
    mgroup = "Synth"

    class SampleInterpolation(Enum):
        off = 0
        linear = 1
        spline = 2

    class EnvelopeInterpolation(Enum):
        off = 0
        linear = 1

    class VibratoType(Enum):
        sin = 0
        saw = 1
        square = 2

    class LoopType(Enum):
        off = 0
        forward = 1
        ping_pong = 2

    class Format(Enum):
        int8 = 1
        int16 = 2
        float32 = 4

    class Channels(Enum):
        mono = 0
        stereo = 8
