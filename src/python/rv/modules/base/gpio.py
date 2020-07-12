# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Gpio
This file was auto-generated by genrv.
"""
from rv.controller import Controller


class BaseGpio:
    name = "Gpio"
    mtype = "GPIO"
    mgroup = "Misc"
    out = Controller(bool, False)
    out_pin = Controller((0, 256), 0)
    out_threshold = Controller((0, 100), 50)
    in_ = Controller(bool, False)
    in_pin = Controller((0, 256), 0)
    in_note = Controller((0, 128), 0)
    in_amplitude = Controller((0, 100), 100)