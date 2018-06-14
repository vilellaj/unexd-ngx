import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { OnInit, forwardRef, Input, Component, style } from "@angular/core";
import * as momentImported from 'moment'; 
const moment = momentImported;

@Component({
  selector: 'unexd-date-input',
  template: `
        <input #input [ngClass]="cssClass" type="text" (input)="updateInnerValue(input.value)" 
          (blur)="formatTextValue()" [formControl]="control" mask="00/00/0000" />
  `,
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => DateInputComponent)},
  ]
})
export class DateInputComponent implements OnInit, ControlValueAccessor {

  private valorISO = null;
  control = new FormControl('');

  private onChange: Function = (_: any) => {};
  private onTouch: Function = (_: any) => {};

  constructor() { }

  @Input()
  get value(): string {
    return this.valorISO;
  };

  set value(novoValor: string) {
    this.valorISO = novoValor;
    this.control.setValue(this.isoToBR(novoValor));
  }

  @Input() cssClass: string;

  ngOnInit() {
  }

  updateInnerValue(dollarValueString: string) {
    this.valorISO = this.brToISO(dollarValueString);
    this.onChange(this.valorISO);
  }

  formatTextValue() {
    this.value = this.value;
  }

  writeValue(newValue: string): void {
    this.value = newValue;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  isoToBR(data: string = '') {
    return moment(data).format('DD/MM/YYYY');    
  }

  brToISO(data: string = '') {
    return moment(data, 'DD/MM/YYYY').format();
  }
}