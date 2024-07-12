import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minutesToHours',
  standalone: true
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(minutes: number | string): string {
    const totalMinutes: number = typeof minutes === 'string' ? parseInt(minutes, 10) : minutes;

    if (isNaN(totalMinutes)) {
      return 'INVALID MINUTES PROVIDED';
    }

    const hours: number = Math.floor(totalMinutes / 60);
    const mins: number = totalMinutes % 60;
    return `${hours}h ${mins}min`;
  }
}
