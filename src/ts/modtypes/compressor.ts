/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { ModuleBase } from "./moduleBase"
import {
  ControllerValues,
  Controllers,
  ModuleType,
  OptionValues,
  Options,
} from "./moduleType"
import { CompressorBehavior } from "./compressorBehavior"
export namespace Compressor {
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Peak = 0,
    Rms = 1,
    PeakZeroLatency = 2,
  }
  interface CompressorControllerValues extends ControllerValues {
    volume: number
    threshold: number
    slopePct: number
    attackMs: number
    releaseMs: number
    mode: Mode
    sidechainInput: number
  }
  class CompressorControllers implements Controllers {
    constructor(readonly controllerValues: CompressorControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volume(): number {
      return this.controllerValues.volume
    }
    // noinspection JSUnusedGlobalSymbols
    set volume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.volume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get threshold(): number {
      return this.controllerValues.threshold
    }
    // noinspection JSUnusedGlobalSymbols
    set threshold(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.threshold = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get slopePct(): number {
      return this.controllerValues.slopePct
    }
    // noinspection JSUnusedGlobalSymbols
    set slopePct(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 200)
      controllerValues.slopePct = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get attackMs(): number {
      return this.controllerValues.attackMs
    }
    // noinspection JSUnusedGlobalSymbols
    set attackMs(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 500)
      controllerValues.attackMs = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get releaseMs(): number {
      return this.controllerValues.releaseMs
    }
    // noinspection JSUnusedGlobalSymbols
    set releaseMs(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 1), 1000)
      controllerValues.releaseMs = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get mode(): Mode {
      return this.controllerValues.mode
    }
    // noinspection JSUnusedGlobalSymbols
    set mode(newValue: Mode) {
      const { controllerValues } = this
      controllerValues.mode = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get sidechainInput(): number {
      return this.controllerValues.sidechainInput
    }
    // noinspection JSUnusedGlobalSymbols
    set sidechainInput(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 32)
      controllerValues.sidechainInput = newValue
    }
  }
  interface CompressorControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    threshold: ControllerMidiMap
    slopePct: ControllerMidiMap
    attackMs: ControllerMidiMap
    releaseMs: ControllerMidiMap
    mode: ControllerMidiMap
    sidechainInput: ControllerMidiMap
  }
  interface CompressorOptionValues extends OptionValues {}
  class CompressorOptions implements Options {
    constructor(readonly optionValues: CompressorOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Compressor"
    flags = 8273
    readonly typeName = "Compressor"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.threshold = val
      },
      (val: number) => {
        this.controllerValues.slopePct = val
      },
      (val: number) => {
        this.controllerValues.attackMs = val
      },
      (val: number) => {
        this.controllerValues.releaseMs = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.sidechainInput = val
      },
    ]
    readonly controllerValues: CompressorControllerValues = {
      volume: 256,
      threshold: 256,
      slopePct: 100,
      attackMs: 1,
      releaseMs: 300,
      mode: Mode.Peak,
      sidechainInput: 0,
    }
    readonly controllers: CompressorControllers = new CompressorControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: CompressorControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      threshold: new ControllerMidiMap(),
      slopePct: new ControllerMidiMap(),
      attackMs: new ControllerMidiMap(),
      releaseMs: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
      sidechainInput: new ControllerMidiMap(),
    }
    readonly optionValues: CompressorOptionValues = {}
    readonly options: CompressorOptions = new CompressorOptions(this.optionValues)
    readonly o = this.options
    behavior?: CompressorBehavior
    constructor() {
      super()
      this.behavior = new CompressorBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.threshold
      yield cv.slopePct
      yield cv.attackMs
      yield cv.releaseMs
      yield cv.mode
      yield cv.sidechainInput
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.threshold = midiMaps[1]
      this.midiMaps.slopePct = midiMaps[2]
      this.midiMaps.attackMs = midiMaps[3]
      this.midiMaps.releaseMs = midiMaps[4]
      this.midiMaps.mode = midiMaps[5]
      this.midiMaps.sidechainInput = midiMaps[6]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.threshold)
      a.push(this.midiMaps.slopePct)
      a.push(this.midiMaps.attackMs)
      a.push(this.midiMaps.releaseMs)
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.sidechainInput)
      return a
    }
  }
}
