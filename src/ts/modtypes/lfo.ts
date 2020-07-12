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
import { LfoBehavior } from "./lfoBehavior"
export namespace Lfo {
  export const enum Type {
    // noinspection JSUnusedGlobalSymbols
    Amplitude = 0,
    Panning = 1,
  }
  export const enum Waveform {
    // noinspection JSUnusedGlobalSymbols
    Sin = 0,
    Square = 1,
    Sin2 = 2,
    Saw = 3,
    Saw2 = 4,
    Random = 5,
    Triangle = 6,
    RandomInterpolated = 7,
  }
  export const enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Stereo = 0,
    Mono = 1,
  }
  export const enum FrequencyUnit {
    // noinspection JSUnusedGlobalSymbols
    Hz_64 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6,
  }
  interface LfoControllerValues extends ControllerValues {
    volume: number
    type: Type
    amplitude: number
    freq: number
    waveform: Waveform
    setPhase: number
    channels: Channels
    frequencyUnit: FrequencyUnit
    dutyCycle: number
    generator: boolean
  }
  class LfoControllers implements Controllers {
    constructor(readonly controllerValues: LfoControllerValues) {}
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
    get type(): Type {
      return this.controllerValues.type
    }
    // noinspection JSUnusedGlobalSymbols
    set type(newValue: Type) {
      const { controllerValues } = this
      controllerValues.type = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get amplitude(): number {
      return this.controllerValues.amplitude
    }
    // noinspection JSUnusedGlobalSymbols
    set amplitude(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.amplitude = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get freq(): number {
      return this.controllerValues.freq
    }
    // noinspection JSUnusedGlobalSymbols
    set freq(newValue: number) {
      const { controllerValues } = this
      switch (this.controllerValues.frequencyUnit) {
        case FrequencyUnit.Hz_64:
          newValue = Math.min(Math.max(newValue, 1), 2048)
          break
        case FrequencyUnit.Ms:
          newValue = Math.min(Math.max(newValue, 1), 4000)
          break
        case FrequencyUnit.Hz:
          newValue = Math.min(Math.max(newValue, 1), 16384)
          break
        case FrequencyUnit.Tick:
          newValue = Math.min(Math.max(newValue, 1), 256)
          break
        case FrequencyUnit.Line:
          newValue = Math.min(Math.max(newValue, 1), 256)
          break
        case FrequencyUnit.Line_2:
          newValue = Math.min(Math.max(newValue, 1), 256)
          break
        case FrequencyUnit.Line_3:
          newValue = Math.min(Math.max(newValue, 1), 256)
          break
      }
      controllerValues.freq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get waveform(): Waveform {
      return this.controllerValues.waveform
    }
    // noinspection JSUnusedGlobalSymbols
    set waveform(newValue: Waveform) {
      const { controllerValues } = this
      controllerValues.waveform = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get setPhase(): number {
      return this.controllerValues.setPhase
    }
    // noinspection JSUnusedGlobalSymbols
    set setPhase(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.setPhase = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get channels(): Channels {
      return this.controllerValues.channels
    }
    // noinspection JSUnusedGlobalSymbols
    set channels(newValue: Channels) {
      const { controllerValues } = this
      controllerValues.channels = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get frequencyUnit(): FrequencyUnit {
      return this.controllerValues.frequencyUnit
    }
    // noinspection JSUnusedGlobalSymbols
    set frequencyUnit(newValue: FrequencyUnit) {
      const { controllerValues } = this
      controllerValues.frequencyUnit = newValue
      this.freq = this.freq
    }
    // noinspection JSUnusedGlobalSymbols
    get dutyCycle(): number {
      return this.controllerValues.dutyCycle
    }
    // noinspection JSUnusedGlobalSymbols
    set dutyCycle(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.dutyCycle = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get generator(): boolean {
      return this.controllerValues.generator
    }
    // noinspection JSUnusedGlobalSymbols
    set generator(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.generator = newValue
    }
  }
  interface LfoControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    type: ControllerMidiMap
    amplitude: ControllerMidiMap
    freq: ControllerMidiMap
    waveform: ControllerMidiMap
    setPhase: ControllerMidiMap
    channels: ControllerMidiMap
    frequencyUnit: ControllerMidiMap
    dutyCycle: ControllerMidiMap
    generator: ControllerMidiMap
  }
  interface LfoOptionValues extends OptionValues {}
  class LfoOptions implements Options {
    constructor(readonly optionValues: LfoOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "LFO"
    flags = 1105
    readonly typeName = "LFO"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.type = val
      },
      (val: number) => {
        this.controllerValues.amplitude = val
      },
      (val: number) => {
        this.controllerValues.freq = val
      },
      (val: number) => {
        this.controllerValues.waveform = val
      },
      (val: number) => {
        this.controllerValues.setPhase = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
      (val: number) => {
        this.controllerValues.frequencyUnit = val
      },
      (val: number) => {
        this.controllerValues.dutyCycle = val
      },
      (val: number) => {
        this.controllerValues.generator = Boolean(val)
      },
    ]
    readonly controllerValues: LfoControllerValues = {
      volume: 256,
      type: Type.Amplitude,
      amplitude: 256,
      freq: 256,
      waveform: Waveform.Sin,
      setPhase: 0,
      channels: Channels.Stereo,
      frequencyUnit: FrequencyUnit.Hz_64,
      dutyCycle: 128,
      generator: false,
    }
    readonly controllers: LfoControllers = new LfoControllers(this.controllerValues)
    readonly c = this.controllers
    readonly midiMaps: LfoControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      type: new ControllerMidiMap(),
      amplitude: new ControllerMidiMap(),
      freq: new ControllerMidiMap(),
      waveform: new ControllerMidiMap(),
      setPhase: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
      frequencyUnit: new ControllerMidiMap(),
      dutyCycle: new ControllerMidiMap(),
      generator: new ControllerMidiMap(),
    }
    readonly optionValues: LfoOptionValues = {}
    readonly options: LfoOptions = new LfoOptions(this.optionValues)
    readonly o = this.options
    behavior?: LfoBehavior
    constructor() {
      super()
      this.behavior = new LfoBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.type
      yield cv.amplitude
      yield cv.freq
      yield cv.waveform
      yield cv.setPhase
      yield cv.channels
      yield cv.frequencyUnit
      yield cv.dutyCycle
      yield Number(cv.generator)
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.type = midiMaps[1]
      this.midiMaps.amplitude = midiMaps[2]
      this.midiMaps.freq = midiMaps[3]
      this.midiMaps.waveform = midiMaps[4]
      this.midiMaps.setPhase = midiMaps[5]
      this.midiMaps.channels = midiMaps[6]
      this.midiMaps.frequencyUnit = midiMaps[7]
      this.midiMaps.dutyCycle = midiMaps[8]
      this.midiMaps.generator = midiMaps[9]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.type)
      a.push(this.midiMaps.amplitude)
      a.push(this.midiMaps.freq)
      a.push(this.midiMaps.waveform)
      a.push(this.midiMaps.setPhase)
      a.push(this.midiMaps.channels)
      a.push(this.midiMaps.frequencyUnit)
      a.push(this.midiMaps.dutyCycle)
      a.push(this.midiMaps.generator)
      return a
    }
  }
}
