// @flow strict
import { type Node as ReactNode } from 'react';
import AccessibilitySection from '../../docs-components/AccessibilitySection';
import docGen, { type DocGen } from '../../docs-components/docgen';
import GeneratedPropTable from '../../docs-components/GeneratedPropTable';
import MainSection from '../../docs-components/MainSection';
import Page from '../../docs-components/Page';
import PageHeader from '../../docs-components/PageHeader';
import QualityChecklist from '../../docs-components/QualityChecklist';
import SandpackExample from '../../docs-components/SandpackExample';
import defaultExample from '../../examples/segmentedcontrol/defaultExample';
import mainExample from '../../examples/segmentedcontrol/mainExample';
import responsiveExample from '../../examples/segmentedcontrol/responsiveExample';
import sizeExample from '../../examples/segmentedcontrol/sizeExample';

export default function DocsPage({ generatedDocGen }: { generatedDocGen: DocGen }): ReactNode {
  return (
    <Page title="SegmentedControl">
      <PageHeader name={generatedDocGen?.displayName} description={generatedDocGen.description}>
        <SandpackExample code={mainExample} name="SegmentedControl Main Example" hideEditor />
      </PageHeader>

      <GeneratedPropTable generatedDocGen={generatedDocGen} />

      <MainSection name="Usage guidelines">
        <MainSection.Subsection columns={2}>
          <MainSection.Card
            cardSize="md"
            type="do"
            title="When to use"
            description={`
          - To switch between views within a small area of content, such as a [Popover](/web/popover).
        `}
          />
          <MainSection.Card
            cardSize="md"
            type="don't"
            title="When not to use"
            description={`
          - To switch between views that represent the main content of a surface. Use [Tabs](/web/tabs) instead.
          - To act as a radio control within a form. Use [RadioGroup](/web/radiogroup) instead.
        `}
          />
        </MainSection.Subsection>
      </MainSection>

      <AccessibilitySection name={generatedDocGen?.displayName} />

      <MainSection name="Variants">
        <MainSection.Subsection
          description="SegmentedControl is a naive component, meaning you need to wire any additional behavior when the user clicks on an item. If you'd like the tabs to control hiding or showing content, that state should live in a parent component."
          title="Default"
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={<SandpackExample name="Default Example" code={defaultExample} />}
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          description="SegmentedControl can have responsive widths where the width of an item is based on its content."
          title="Responsive"
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={<SandpackExample name="Responsive Example" code={responsiveExample} />}
          />
        </MainSection.Subsection>
        <MainSection.Subsection
          title="Size"
          description={`SegmentedControl is available in 3 fixed sizes:
          1. \`lg\` (48px)
              Large should be used when SegmentedControl needs to span larger areas. The font is 16px.
          2. \`md\` (40px)
              Medium is the default size, and should be used on most pinner surfaces. The font is 16px.
          3. \`sm\` (32px)
              Small should be used in places where the UI is very dense. The font is 14px.`}
        >
          <MainSection.Card
            cardSize="lg"
            sandpackExample={<SandpackExample name="Sizes Example" code={sizeExample} />}
          />
        </MainSection.Subsection>
      </MainSection>

      <QualityChecklist component={generatedDocGen?.displayName} />
    </Page>
  );
}

export async function getServerSideProps(): Promise<{
  props: { generatedDocGen: DocGen },
}> {
  return {
    props: { generatedDocGen: await docGen('SegmentedControl') },
  };
}
