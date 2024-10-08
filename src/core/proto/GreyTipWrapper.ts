// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "GreyTipWrapper.proto" (package "SysMessage", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message SysMessage.GreyTipWrapper
 */
export interface GreyTipWrapper {
    /**
     * @generated from protobuf field: uint32 subTypeId = 1;
     */
    subTypeId: number;
    /**
     * @generated from protobuf field: uint32 groupCode = 4;
     */
    groupCode: number;
    /**
     * @generated from protobuf field: uint32 subTypeIdMinusOne = 13;
     */
    subTypeIdMinusOne: number;
    /**
     * @generated from protobuf field: bytes rest = 44;
     */
    rest: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class GreyTipWrapper$Type extends MessageType<GreyTipWrapper> {
    constructor() {
        super("SysMessage.GreyTipWrapper", [
            { no: 1, name: "subTypeId", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "groupCode", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "subTypeIdMinusOne", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 44, name: "rest", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<GreyTipWrapper>): GreyTipWrapper {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.subTypeId = 0;
        message.groupCode = 0;
        message.subTypeIdMinusOne = 0;
        message.rest = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<GreyTipWrapper>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GreyTipWrapper): GreyTipWrapper {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 subTypeId */ 1:
                    message.subTypeId = reader.uint32();
                    break;
                case /* uint32 groupCode */ 4:
                    message.groupCode = reader.uint32();
                    break;
                case /* uint32 subTypeIdMinusOne */ 13:
                    message.subTypeIdMinusOne = reader.uint32();
                    break;
                case /* bytes rest */ 44:
                    message.rest = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GreyTipWrapper, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 subTypeId = 1; */
        if (message.subTypeId !== 0)
            writer.tag(1, WireType.Varint).uint32(message.subTypeId);
        /* uint32 groupCode = 4; */
        if (message.groupCode !== 0)
            writer.tag(4, WireType.Varint).uint32(message.groupCode);
        /* uint32 subTypeIdMinusOne = 13; */
        if (message.subTypeIdMinusOne !== 0)
            writer.tag(13, WireType.Varint).uint32(message.subTypeIdMinusOne);
        /* bytes rest = 44; */
        if (message.rest.length)
            writer.tag(44, WireType.LengthDelimited).bytes(message.rest);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SysMessage.GreyTipWrapper
 */
export const GreyTipWrapper = new GreyTipWrapper$Type();
