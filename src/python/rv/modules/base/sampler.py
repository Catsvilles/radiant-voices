# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Sampler
This file was auto-generated by genrv.
"""
from enum import Enum

from rv.controller import Controller
from rv.option import Option


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

    volume = Controller((0, 512), 256)
    panning = Controller((-128, 128), 0)
    sample_interpolation = Controller(SampleInterpolation, SampleInterpolation.spline)
    envelope_interpolation = Controller(
        EnvelopeInterpolation, EnvelopeInterpolation.linear
    )
    polyphony_ch = Controller((1, 32), 8)
    rec_threshold = Controller((0, 10000), 4)
    vibrato_type = Controller(VibratoType, VibratoType.sin, attached=False)
    vibrato_attack = Controller((0, 255), 0, attached=False)
    vibrato_depth = Controller((0, 255), 0, attached=False)
    vibrato_rate = Controller((0, 63), 0, attached=False)
    volume_fadeout = Controller((0, 8192), 0, attached=False)
    record_on_play = Option(False)
    record_in_mono = Option(False)
    record_with_reduced_sample_rate = Option(False)
    record_in_16_bit = Option(False)
    stop_recording_on_project_stop = Option(False)
    ignore_velocity_for_volume = Option(False)