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
import { AmplifierBehavior } from "./amplifierBehavior"
export namespace Amplifier {
  interface AmplifierControllerValues extends ControllerValues {
    volume: number
    panning: number
    dcOffset: number
    inverse: boolean
    stereoWidth: number
    absolute: boolean
    fineVolume: number
    gain: number
  }
  class AmplifierControllers implements Controllers {
    constructor(readonly controllerValues: AmplifierControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volume(): number {
      return this.controllerValues.volume
    }
    // noinspection JSUnusedGlobalSymbols
    set volume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1024)
      controllerValues.volume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get panning(): number {
      return this.controllerValues.panning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set panning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.panning = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get dcOffset(): number {
      return this.controllerValues.dcOffset + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set dcOffset(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.dcOffset = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get inverse(): boolean {
      return this.controllerValues.inverse
    }
    // noinspection JSUnusedGlobalSymbols
    set inverse(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.inverse = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get stereoWidth(): number {
      return this.controllerValues.stereoWidth
    }
    // noinspection JSUnusedGlobalSymbols
    set stereoWidth(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.stereoWidth = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get absolute(): boolean {
      return this.controllerValues.absolute
    }
    // noinspection JSUnusedGlobalSymbols
    set absolute(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.absolute = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fineVolume(): number {
      return this.controllerValues.fineVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set fineVolume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 32768)
      controllerValues.fineVolume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get gain(): number {
      return this.controllerValues.gain
    }
    // noinspection JSUnusedGlobalSymbols
    set gain(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 5000)
      controllerValues.gain = newValue
    }
  }
  interface AmplifierControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    panning: ControllerMidiMap
    dcOffset: ControllerMidiMap
    inverse: ControllerMidiMap
    stereoWidth: ControllerMidiMap
    absolute: ControllerMidiMap
    fineVolume: ControllerMidiMap
    gain: ControllerMidiMap
  }
  interface AmplifierOptionValues extends OptionValues {}
  class AmplifierOptions implements Options {
    constructor(readonly optionValues: AmplifierOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Amplifier"
    flags = 81
    readonly typeName = "Amplifier"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.panning = val
      },
      (val: number) => {
        this.controllerValues.dcOffset = val
      },
      (val: number) => {
        this.controllerValues.inverse = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.stereoWidth = val
      },
      (val: number) => {
        this.controllerValues.absolute = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.fineVolume = val
      },
      (val: number) => {
        this.controllerValues.gain = val
      },
    ]
    readonly controllerValues: AmplifierControllerValues = {
      volume: 256,
      panning: 0,
      dcOffset: 0,
      inverse: false,
      stereoWidth: 128,
      absolute: false,
      fineVolume: 32768,
      gain: 1,
    }
    readonly controllers: AmplifierControllers = new AmplifierControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: AmplifierControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      panning: new ControllerMidiMap(),
      dcOffset: new ControllerMidiMap(),
      inverse: new ControllerMidiMap(),
      stereoWidth: new ControllerMidiMap(),
      absolute: new ControllerMidiMap(),
      fineVolume: new ControllerMidiMap(),
      gain: new ControllerMidiMap(),
    }
    readonly optionValues: AmplifierOptionValues = {}
    readonly options: AmplifierOptions = new AmplifierOptions(this.optionValues)
    readonly o = this.options
    behavior?: AmplifierBehavior
    constructor() {
      super()
      this.behavior = new AmplifierBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.panning
      yield cv.dcOffset
      yield Number(cv.inverse)
      yield cv.stereoWidth
      yield Number(cv.absolute)
      yield cv.fineVolume
      yield cv.gain
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.panning = midiMaps[1]
      this.midiMaps.dcOffset = midiMaps[2]
      this.midiMaps.inverse = midiMaps[3]
      this.midiMaps.stereoWidth = midiMaps[4]
      this.midiMaps.absolute = midiMaps[5]
      this.midiMaps.fineVolume = midiMaps[6]
      this.midiMaps.gain = midiMaps[7]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.panning)
      a.push(this.midiMaps.dcOffset)
      a.push(this.midiMaps.inverse)
      a.push(this.midiMaps.stereoWidth)
      a.push(this.midiMaps.absolute)
      a.push(this.midiMaps.fineVolume)
      a.push(this.midiMaps.gain)
      return a
    }
  }
}
