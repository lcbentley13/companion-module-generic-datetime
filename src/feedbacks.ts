import { combineRgb } from '@companion-module/base'
import { isDayOfWeekOccurenceCallback, isDayOfWeekOccurenceOptions } from './feedbacks/is-day-of-week-occurence.js'
import { isDayOfWeekOptions, isDayOfWeekCallback } from './feedbacks/is-day-of-week.js'
import { isHourCallback, isHourOptions } from './feedbacks/is-hour.js'
import { isLeapYearCallback, isLeapYearOptions } from './feedbacks/is-leap-year.js'
import { isMeridiemCallback, isMeridiemOptions } from './feedbacks/is-meridiem.js'
import { isMonthCallback, isMonthOptions } from './feedbacks/is-month.js'
import { isQuarterCallback, isQuarterOptions } from './feedbacks/is-quarter.js'
import { isYearCallback, isYearOptions } from './feedbacks/is-year.js'
import type { ModuleInstance } from './main.js'
import { isMinuteCallback, isMinuteOptions } from './feedbacks/is-minute.js'
import { isSecondCallback, isSecondOptions } from './feedbacks/is-second.js'
import { isDateCallback, isDateOptions } from './feedbacks/is-date.js'
import { isTimeCallback, isTimeOptions } from './feedbacks/is-time.js'
import { isDateTimeCallback, isDateTimeOptions } from './feedbacks/is-datetime.js'

export function DefineFeedbacks(self: ModuleInstance): void {
	self.setFeedbackDefinitions({
		IsDate: {
			name: 'Is Date',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isDateOptions(self),
			callback: async (feedback, context) => isDateCallback(self, feedback, context),
		},
		IsTime: {
			name: 'Is Time',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isTimeOptions(self),
			callback: async (feedback, context) => isTimeCallback(self, feedback, context),
		},
		IsDateTime: {
			name: 'Is DateTime',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isDateTimeOptions(self),
			callback: async (feedback, context) => isDateTimeCallback(self, feedback, context),
		},
		IsLeapYear: {
			name: 'Is Leap Year',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isLeapYearOptions,
			callback: () => isLeapYearCallback(self),
		},
		IsYear: {
			name: 'Is Year',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isYearOptions(self),
			callback: async (feedback, context) => isYearCallback(self, feedback, context),
		},
		IsQuarter: {
			name: 'Is Quarter',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isQuarterOptions,
			callback: (feedback) => isQuarterCallback(self, feedback),
		},
		IsMonth: {
			name: 'Is Month',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isMonthOptions,
			callback: (feedback) => isMonthCallback(self, feedback),
		},
		IsMeridiem: {
			name: 'Is Meridiem',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isMeridiemOptions,
			callback: (feedback) => isMeridiemCallback(self, feedback),
		},
		IsHour: {
			name: 'Is Hour',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isHourOptions(self),
			callback: async (feedback, context) => isHourCallback(self, feedback, context),
		},
		IsMinute: {
			name: 'Is Minute',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isMinuteOptions(self),
			callback: async (feedback, context) => isMinuteCallback(self, feedback, context),
		},
		IsSecond: {
			name: 'Is Second',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isSecondOptions(self),
			callback: async (feedback, context) => isSecondCallback(self, feedback, context),
		},
		IsDayOfWeek: {
			name: 'Is Day of the Week',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isDayOfWeekOptions,
			callback: (feedback) => isDayOfWeekCallback(self, feedback),
		},
		IsDayOfWeekOccurrence: {
			name: 'Is Day of the Week Occurrence',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 153, 0),
				color: combineRgb(255, 255, 255),
			},
			options: isDayOfWeekOccurenceOptions,
			callback: (feedback) => isDayOfWeekOccurenceCallback(self, feedback),
		},
	})
}
