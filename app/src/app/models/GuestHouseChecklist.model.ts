import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class GuestHouseChecklist {
  @JsonProperty('Problem', String, true)
  public Problem: string = undefined;

  @JsonProperty('Unit', Number, true)
  public Unit: number = undefined;

  @JsonProperty('ResolveDate', String, true)
  public ResolveDate: string = undefined;

  @JsonProperty('AdditionalInfo', String, true)
  public AdditionalInfo: string = undefined;

  @JsonProperty('GuestHouse', String, true)
  public GuestHouse: string = undefined;

}