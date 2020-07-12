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
import { DcBlockerBehavior } from "./dcBlockerBehavior"
export namespace DcBlocker {
  export const enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Stereo = 0,
    Mono = 1,
  }
  interface DcBlockerControllerValues extends ControllerValues {
    channels: Channels
  }
  class DcBlockerControllers implements Controllers {
    constructor(readonly controllerValues: DcBlockerControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get channels(): Channels {
      return this.controllerValues.channels
    }
    // noinspection JSUnusedGlobalSymbols
    set channels(newValue: Channels) {
      const { controllerValues } = this
      controllerValues.channels = newValue
    }
  }
  interface DcBlockerControllerMidiMaps extends ControllerMidiMaps {
    channels: ControllerMidiMap
  }
  interface DcBlockerOptionValues extends OptionValues {}
  class DcBlockerOptions implements Options {
    constructor(readonly optionValues: DcBlockerOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "DC Blocker"
    flags = 81
    readonly typeName = "DC Blocker"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.channels = val
      },
    ]
    readonly controllerValues: DcBlockerControllerValues = {
      channels: Channels.Stereo,
    }
    readonly controllers: DcBlockerControllers = new DcBlockerControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: DcBlockerControllerMidiMaps = {
      channels: new ControllerMidiMap(),
    }
    readonly optionValues: DcBlockerOptionValues = {}
    readonly options: DcBlockerOptions = new DcBlockerOptions(this.optionValues)
    readonly o = this.options
    behavior?: DcBlockerBehavior
    constructor() {
      super()
      this.behavior = new DcBlockerBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.channels
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.channels = midiMaps[0]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.channels)
      return a
    }
  }
}