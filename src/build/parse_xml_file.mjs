// Copyright 2023 The Outline Authors
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

import xmlbuilder from 'xmlbuilder2';
import fs from 'node:fs/promises';

export async function parseXmlFile(filePath, {verbose = false} = {}) {
  const xmlDocument = xmlbuilder.convert(await fs.readFile(filePath, {encoding: 'utf8'}), {
    format: 'object',
  });

  if (verbose) {
    console.info('[parseXmlFile]', {filePath, xmlDocument: JSON.stringify(xmlDocument, null, 2)});
  }

  return xmlDocument;
}
