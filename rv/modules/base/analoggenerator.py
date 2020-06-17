# This file was auto-generated by rvoxgen.
# -- DO NOT EDIT DIRECTLY --


from enum import Enum


class BaseAnalogGenerator:
    name = "AnalogGenerator"
    mtype = "Analog generator"
    mgroup = "Synth"

    class Mode(Enum):
        hq = 0
        hq_mono = 1
        lq = 2
        lq_mono = 3

    class Waveform(Enum):
        triangle = 0
        saw = 1
        square = 2
        noise = 3
        drawn = 4
        sin = 5
        hsin = 6
        asin = 7
        drawn_with_spline_interpolation = 8
        noise_with_spline_interpolation = 9
        white_noise = 10
        pink_noise = 11
        red_noise = 12
        blue_noise = 13
        violet_noise = 14
        grey_noise = 15

    class Filter(Enum):
        off = 0
        lp_12db = 1
        hp_12db = 2
        bp_12db = 3
        br_12db = 4
        lp_24db = 5
        hp_24db = 6
        bp_24db = 7
        br_24db = 8

    class FilterEnvelope(Enum):
        off = 0
        sustain_off = 1
        sustain_on = 2
