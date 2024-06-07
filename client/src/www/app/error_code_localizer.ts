// Copyright 2024 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Localizer} from '@outline/infrastructure/i18n';

import {ErrorCode, ServerUnreachable} from '../model/platform_error';

const errCodeMapping = new Map<string, string>([[ServerUnreachable, 'outline-plugin-error-server-unreachable']]);

export function localizeErrorCode(code: ErrorCode, localize: Localizer): string {
  return localize(errCodeMapping.get(code) || 'error-unexpected');
}
